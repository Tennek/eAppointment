import { createAction, props } from '@ngrx/store';

export const SET_LANGUAGES = '[Languages] Set Languages';
export const FETCH_LANGUAGES = '[Languages] Fetch Languages';
export const FETCH_LANGUAGES_POST = '[Languages] Fetch Languages Post';
export const SET_SELECTEDLANGUAGE = '[Languages] Set Selected Language';
export const FETCH_SELECTEDLANGUAGE = '[Languages] Fetch Selected Language';

export const setLanguages = createAction(
    SET_LANGUAGES,
    props<{payLoad: string[]}>()
);

export const fetchLanguages = createAction(
    FETCH_LANGUAGES
);

export const fetchLanguagesPost = createAction(
    FETCH_LANGUAGES_POST,
    props<{payLoad: string}>()
);

export const setSelectedLanguage = createAction(
    SET_SELECTEDLANGUAGE,
    props<{payLoad: string}>()
);

export const fetchSelectedLanguage = createAction(
    FETCH_SELECTEDLANGUAGE
);