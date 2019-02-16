import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { HELLO_SAGA_FETCH_REQUEST, HELLO_SAGA_FETCH_COMPLETE } from '../actions';

const state = (state = {}, action: any) => {
    switch(action.type) {
        case HELLO_SAGA_FETCH_REQUEST:
            return {
                ...state,
                posts: action.posts
            }
        case HELLO_SAGA_FETCH_COMPLETE:
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