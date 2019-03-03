import { put, takeEvery, call, all, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';
import { IGetJoinFetchApi } from './Types';

export const getJoinFetchApi = async (posts: IGetJoinFetchApi) => {
	const response = await axios.post(`${actions.BASE_SERVER_URL}/api/join`, posts);
	return response.data;
}

export const getLoginFetchApi = async (posts: any) => {
	const response = await axios.post(`${actions.BASE_SERVER_URL}/api/login`, posts);
	return response.data;
}

function* JoinSaga() {
	const response = yield call(getJoinFetchApi as any);
	try {
		yield put(actions.setJoinReceivePosts(response));
	}catch(e) {
		yield put({ type: actions.JOIN_FETCH_FAILED, message: e.message });
	}
}

function* LoginSaga() {
	const response = yield call(getLoginFetchApi as any);
	try {
		yield put(actions.setLoginReceivePosts(response));
	}catch(e) {
		yield put({ type: actions.LOGIN_FETCH_COMPLETE, message: e.message });
	}
}

function* sagaList() {
	yield takeEvery(actions.JOIN_FETCH_COMPLETE, JoinSaga);
	yield takeEvery(actions.LOGIN_FETCH_COMPLETE, LoginSaga);
}

function* root() {
	yield all([
		fork(sagaList)
	]);
}

export default root;