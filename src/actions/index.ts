import * as Types from './Types';

export const BASE_SERVER_URL = 'http://localhost:4000';

export const POST_JOIN_FETCH_REQUEST = 'POST_JOIN_FETCH_REQUEST';
export const JOIN_FETCH_COMPLETE = 'JOIN_FETCH_COMPLETE';
export const JOIN_FETCH_FAILED = 'JOIN_FETCH_FAILED';
export const POST_LOGIN_FETCH_REQUEST = 'POST_LOGIN_FETCH_REQUEST';
export const LOGIN_FETCH_COMPLETE = 'LOGIN_FETCH_COMPLETE';
export const LOGIN_STATUS = 'LOGIN_STATUS';

export const getLoginStatus = (data: Types.ILoginStatusType) => {
    return {
        type: LOGIN_STATUS,
        data
    }
}

export const setJoinReceivePosts = (posts: Types.ISetJoinReceivePostsType) => {
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

export const setLoginReceivePosts = (posts: Types.ISetLoginReceivePostsType) => {
    return {
        type: POST_LOGIN_FETCH_REQUEST,
        posts
    }
}

export const getLoginReceivePosts = () => {
    return {
        type: LOGIN_FETCH_COMPLETE
    }
}