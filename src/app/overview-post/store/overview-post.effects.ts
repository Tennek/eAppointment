import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { of } from 'rxjs';

import * as PostsActions from './overview-post.actions';
import * as LanguageActions from '../../language-bar/store/language.actions';
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/shared/post.model";



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
            mergeMap(({payLoad}) => {
                if(payLoad) {
                    return of(({ type: LanguageActions.FETCH_LANGUAGES_POST, payLoad: (<Post>payLoad).id }));
                }
                return of(({ type: LanguageActions.FETCH_LANGUAGES }));
            })
        )
    );

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {}
}