import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { POST_JOIN_FETCH_REQUEST, JOIN_FETCH_COMPLETE } from '../actions';

const state = (state = {}, action: any) => {
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
        default:
            return state;
    }
}

const reducer = combineReducers({
    state,
    form: reduxFormReducer
});

export default reducer;