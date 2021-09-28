import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWiz from '../store/wizard.reducer';

const getWizardStoreFeatureState = createFeatureSelector<fromWiz.State>('wizardStore');

export const getWho = createSelector(
    getWizardStoreFeatureState,
    state => state.who
);

export const getWhat = createSelector(
    getWizardStoreFeatureState,
    state => state.what
);

export const getWhen = createSelector(
    getWizardStoreFeatureState,
    state => state.when
);