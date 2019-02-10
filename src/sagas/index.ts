import { put, takeLatest, call, all, fork } from 'redux-saga/effects';
import * as actions from '../actions';

export const fetchPostsApi = async () => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
	return response.json();
}

function* helloSaga() {
	const response = yield call(fetchPostsApi);
	yield put(actions.setReceivePosts(response));
}

function* mySaga() {
	yield takeLatest(actions.HELLO_SAGA_FETCH_COMPLETE, helloSaga);
}

function* root() {
	yield all([
		fork(mySaga)
	]);
}

export default root;