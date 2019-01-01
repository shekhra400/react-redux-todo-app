
import axios from "axios";
import { takeLatest, call, put } from 'redux-saga/effects';
import {  FETCH_ALL_POST_ACTION ,API_ENDPOINT_DUMMY_BASE_URL  } from "../constants";

import { fetchPostsSuccess, fetchPostsError } from "../actions/commonAction";


export function fetchPosts() {
  return axios.get(API_ENDPOINT_DUMMY_BASE_URL + 'posts?_limit=15');
};

function* postsSagaWatcher(actions){
  try {
    const response = yield call(fetchPosts,actions.payload);
    if (response.status === 200) {
        return yield put(fetchPostsSuccess(response.data));
    }
      return yield put(fetchPostsError(response.error));
  } catch (err) {
    return yield put(fetchPostsError(err.message));
  }
}
export function* postsSaga(){
  yield takeLatest(FETCH_ALL_POST_ACTION, postsSagaWatcher);
}
