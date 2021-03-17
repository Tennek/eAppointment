import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/shared/post.model';

export const SET_SELECTEDPOST = '[Posts] Set Selected Post';
export const FETCH_SELECTEDPOST = '[Posts] Fetch Selected Post';

export const setSelectedPost = createAction(
    SET_SELECTEDPOST,
    props<{payLoad: Post | undefined}>()
);

export const fetchSelectedPost = createAction(
    FETCH_SELECTEDPOST,
    props<{payLoad: string}>()
);