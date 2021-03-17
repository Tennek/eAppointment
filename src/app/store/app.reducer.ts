import { ActionReducerMap } from '@ngrx/store';

import * as fromLanguages from '../language-bar/store/language.reducer';
import * as fromOverviewPosts from '../overview-post/store/overview-post.reducer';

export interface AppState {
    language: fromLanguages.State;
    overviewposts: fromOverviewPosts.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    language: fromLanguages.languageReducer
    , overviewposts: fromOverviewPosts.overviewPostRecuder
};