import { call, put, fork, takeEvery } from 'redux-saga/effects';
import * as API from '../api';
import * as actions from '../actions';

function* runRequestGetMorePosts(action) {
    yield put(actions.showLoading());
    const { result, err } = yield call(API.getPosts);
    if (result && result.status === 200 && !err) {
        yield put(actions.successGetMorePosts(result.data));
    } else {
        // @todo:エラー時の処理
        // yield put(actions.showError());
    }
    yield put(actions.hideLoading());
}

function* handleRequestGetMorePosts() {
    yield takeEvery('GET_MORE_POSTS', runRequestGetMorePosts);
}

export default function* rootSaga() {
  yield fork(handleRequestGetMorePosts);
}
