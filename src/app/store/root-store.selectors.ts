import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../store/app.reducer';

const getRootStoreFeatureState = createFeatureSelector<fromRoot.AppState>('app');

export const getLanguage = createSelector(
    getRootStoreFeatureState,
    state => state.language
)

export const getOverviewposts = createSelector(
    getRootStoreFeatureState,
    state => state.overviewposts
)