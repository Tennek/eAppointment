import { Action, createReducer, on } from '@ngrx/store';
import { PostService } from 'src/app/shared/post-service.model';

import { Post } from 'src/app/shared/post.model';
import * as PostActions from './overview-post.actions';

export interface State {
    selectedPost: Post | undefined,
    supportedServices: PostService[]
}

const initialState: State = {
    selectedPost: undefined,
    supportedServices: []
};

const _overviewPostRecuder = createReducer(initialState
    , on(PostActions.setSelectedPost, (state, { payLoad }) => ({ ...state, selectedPost: payLoad }))
    , on(PostActions.setSupportedServices, (state, { payLoad }) => ({ ...state, supportedServices: {...payLoad} }))
)

export function overviewPostRecuder(state: State | undefined, action: Action) {
    return _overviewPostRecuder(state, action);
}