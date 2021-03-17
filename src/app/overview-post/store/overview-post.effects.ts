import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';

import * as PostsActions from './overview-post.actions';
import * as LanguageActions from '../../language-bar/store/language.actions';
import * as fromApp from '../../store/app.reducer';
import { Post } from 'src/app/shared/post.model';

import { OfficeService } from "src/app/services/office.service";
import { LanguageService } from "src/app/services/language.service";
import { Store } from "@ngrx/store";



@Injectable({
    providedIn: 'root'
})
export class OverviewPostEffects {
    fetchSelectedPost = createEffect(() => 
        this.actions$.pipe(
            ofType(PostsActions.FETCH_SELECTEDPOST),
            mergeMap(({payLoad}) => {
                return this.postService.getPostById(payLoad).pipe(
                    map( postInfo => ({ type: PostsActions.SET_SELECTEDPOST, payLoad: postInfo }))
                )
            })
        )
    );

    setSelectedPost = createEffect(() => 
        this.actions$.pipe(
            ofType(PostsActions.SET_SELECTEDPOST),
            withLatestFrom(this.store.select('language')),
            mergeMap(([{payLoad}, languageState]) => {
                if(payLoad) {
                    return this.languageService.getSupportedLanguagesForPost((<Post>payLoad).id)
                    .pipe(
                        mergeMap( (supportedLanguages) => {
                            const setSupportedLanguagesAction = ({ type: LanguageActions.SET_LANGUAGES, payLoad: supportedLanguages });
                            const currentSelectedLanguage = languageState.selectedLanguage;
                            if(currentSelectedLanguage && !supportedLanguages.includes(currentSelectedLanguage)) {
                                var firstAvailableLanguage = supportedLanguages.slice().sort((a,b) => (a > b ? 1 : -1))[0];
                                return [setSupportedLanguagesAction, ({ type: LanguageActions.SET_SELECTEDLANGUAGE, payLoad: firstAvailableLanguage })];
                            }
                            return [setSupportedLanguagesAction];
                        })
                    );
                }
                return of(({ type: LanguageActions.FETCH_LANGUAGES }));
            })
        )
    );

    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions,
        private postService: OfficeService,
        private languageService: LanguageService
    ) {}
}