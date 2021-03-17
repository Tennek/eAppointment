import { Action, createReducer, on } from '@ngrx/store';
import * as LanguagesActions from './language.actions';

export interface State {
    supportedLanguages: string[],
    selectedLanguage: string
}

const initialState: State = {
    supportedLanguages: [],
    selectedLanguage: ''
};

const _languageReducer = createReducer(initialState
    , on(LanguagesActions.setLanguages, (state, { payLoad }) => ({ ...state, supportedLanguages: [...payLoad] }))
    , on(LanguagesActions.setSelectedLanguage, (state, { payLoad }) => ({ ...state, selectedLanguage: payLoad }))
)

export function languageReducer(state: State | undefined, action: Action) {
    return _languageReducer(state, action);
}
