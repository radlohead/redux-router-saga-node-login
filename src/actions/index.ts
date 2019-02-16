import { ISetJoinReceivePostsType } from './Types';

export const BASE_SERVER_URL = 'http://localhost:4000';

export const POST_JOIN_FETCH_REQUEST = 'POST_JOIN_FETCH_REQUEST';
export const JOIN_FETCH_COMPLETE = 'JOIN_FETCH_COMPLETE';
export const JOIN_FETCH_FAILED = 'JOIN_FETCH_FAILED';

export const setJoinReceivePosts = (posts: ISetJoinReceivePostsType) => {
    return {
        type: POST_JOIN_FETCH_REQUEST,
        posts
    }
}

export const getReceivePosts = () => {
    return {
        type: JOIN_FETCH_COMPLETE,
    }
}