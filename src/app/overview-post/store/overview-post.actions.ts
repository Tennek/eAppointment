import { createAction, props } from '@ngrx/store';
import { PostService } from 'src/app/shared/post-service.model';

import { Post } from 'src/app/shared/post.model';

export const SET_SELECTEDPOST = '[Posts] Set Selected Post';
export const FETCH_SELECTEDPOST = '[Posts] Fetch Selected Post';

export const SET_SUPPORTEDSERVICES = '[Posts] Set Supported Services'
export const FETCH_SUPPORTEDSERVICES = '[Posts] Fetch Supported Services'

export const setSelectedPost = createAction(
    SET_SELECTEDPOST,
    props<{payLoad: Post | undefined}>()
);

export const fetchSelectedPost = createAction(
    FETCH_SELECTEDPOST,
    props<{payLoad: string}>()
);

export const setSupportedServices = createAction(
    SET_SUPPORTEDSERVICES,
    props<{payLoad: PostService[]}>()
);

export const fetchSupportedServices = createAction(
    FETCH_SUPPORTEDSERVICES,
    props<{payLoad: string}>()
);