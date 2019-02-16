export const BASE_SERVER_URL = 'http://localhost:4000';
export const HELLO_SAGA_FETCH_REQUEST = 'HELLO_SAGA_FETCH_REQUEST';
export const HELLO_SAGA_FETCH_COMPLETE = 'HELLO_SAGA_FETCH_COMPLETE';
export const HELLO_SAGA_FETCH_FAILED = 'HELLO_SAGA_FETCH_FAILED';

export const setReceivePosts = (posts: any) => {
    return {
        type: HELLO_SAGA_FETCH_REQUEST,
        posts
    }
}

export const getReceivePosts = () => {
    return {
        type: HELLO_SAGA_FETCH_COMPLETE,
    }
}