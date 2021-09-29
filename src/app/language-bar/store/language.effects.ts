import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { Store } from "@ngrx/store";

import * as fromApp from '../../store/app.reducer';
import * as LanguagesActions from './language.actions';
import { LanguageService } from 'src/app/services/language.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageEffects {

    fetchSupportedLanguages = createEffect(() => this.actions$.pipe(
      ofType(LanguagesActions.FETCH_LANGUAGES),
      mergeMap(() => {
        return this.languageService.getSupportedLanguages().pipe(
          map( supportedLanguages => ({ type: LanguagesActions.SET_LANGUAGES, payLoad: supportedLanguages }))
        )
      })
    ));

    fetchSupportedLanguagesForPost = createEffect(() => this.actions$.pipe(
      ofType(LanguagesActions.FETCH_LANGUAGES_POST),
      mergeMap(({payLoad}) => {
        return this.languageService.getSupportedLanguagesForPost(payLoad)
        .pipe(
            withLatestFrom(this.store.select('language')),
            mergeMap( ([supportedLanguages, languageState]) => {
                const setSupportedLanguagesAction = ({ type: LanguagesActions.SET_LANGUAGES, payLoad: supportedLanguages });
                const currentSelectedLanguage = languageState.selectedLanguage;
                if(currentSelectedLanguage && !supportedLanguages.includes(currentSelectedLanguage)) {
                    var firstAvailableLanguage = supportedLanguages.slice().sort((a,b) => (a > b ? 1 : -1))[0];
                    return [setSupportedLanguagesAction, ({ type: LanguagesActions.SET_SELECTEDLANGUAGE, payLoad: firstAvailableLanguage })];
                }
                return [setSupportedLanguagesAction];
            })
        );
      })
    ));

    fetchSelectedLanguage = createEffect(() => this.actions$.pipe(
      ofType(LanguagesActions.FETCH_SELECTEDLANGUAGE),
      mergeMap(() => {
        return this.languageService.getDefaultLanguage().pipe(
          map( selectedLanguage => ({ type: LanguagesActions.SET_SELECTEDLANGUAGE, payLoad: selectedLanguage }))
        )
      })
    ));

    setSelectedLanguage = createEffect(() => this.actions$.pipe(
        ofType(LanguagesActions.SET_SELECTEDLANGUAGE),
        tap(({payLoad}) => {
          this.translateService.use(payLoad);
        })
    ), {dispatch: false});

    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions,
        private languageService: LanguageService,
        private translateService: TranslateService
    ) {}
}