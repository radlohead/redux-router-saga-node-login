import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { POST_JOIN_FETCH_REQUEST, JOIN_FETCH_COMPLETE, POST_LOGIN_FETCH_REQUEST, 
    LOGIN_FETCH_COMPLETE, LOGIN_STATUS } from '../actions';
import { IReducerAction } from './Types';

const state = (state = {}, action: IReducerAction) => {
    switch(action.type) {
        case POST_JOIN_FETCH_REQUEST:
            return {
                ...state,
                posts: action.posts
            }
        case JOIN_FETCH_COMPLETE:
            return {
                ...state
            }
        case POST_LOGIN_FETCH_REQUEST:
            return {
                ...state,
                posts: action.posts
            }
        case LOGIN_FETCH_COMPLETE:
            return {
                ...state
            }
        case LOGIN_STATUS:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
    state,
    form: reduxFormReducer
});

export default reducer;