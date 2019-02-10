import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { HELLO_SAGA_FETCH_REQUEST } from '../actions';

const state = (state = {}, action: any) => {
    switch(action.type) {
        case HELLO_SAGA_FETCH_REQUEST:
            return {
                ...state,
                posts: action.posts
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