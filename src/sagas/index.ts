import { put, takeLatest, call, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export const fetchPostsApi: any = async (posts: any) => {
	const response = await axios.post(`${actions.BASE_SERVER_URL}/api/join`, posts);
	return response.data;
}

function* helloSaga() {
	const response = yield call(fetchPostsApi);
	try {
		yield put(actions.setReceivePosts(response));
	}catch(e) {
		yield put({ type: actions.HELLO_SAGA_FETCH_FAILED, message: e.message });
	}
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