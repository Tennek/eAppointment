import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/shared/post.model';
import * as PostActions from './overview-post.actions';

export interface State {
    selectedPost: Post | undefined
}

const initialState: State = {
    selectedPost: undefined
};

const _overviewPostRecuder = createReducer(initialState
    , on(PostActions.setSelectedPost, (state, { payLoad }) => ({ ...state, selectedPost: payLoad }))
)

export function overviewPostRecuder(state: State | undefined, action: Action) {
    return _overviewPostRecuder(state, action);
}