import { reducer as reduxFormReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const reducer = combineReducers({
    form: reduxFormReducer
});

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

export default store;