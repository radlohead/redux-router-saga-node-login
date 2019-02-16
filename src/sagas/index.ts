import { put, takeLatest, call, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export const getJoinFetchApi: any = async (posts: any) => {
	const response = await axios.post(`${actions.BASE_SERVER_URL}/api/join`, posts);
	return response.data;
}

function* JoinSaga() {
	const response = yield call(getJoinFetchApi);
	try {
		yield put(actions.setJoinReceivePosts(response));
	}catch(e) {
		yield put({ type: actions.JOIN_FETCH_FAILED, message: e.message });
	}
}

function* sagaList() {
	yield takeLatest(actions.JOIN_FETCH_COMPLETE, JoinSaga);
}

function* root() {
	yield all([
		fork(sagaList)
	]);
}

export default root;