
import axios from "axios";
import { takeLatest, call, put } from 'redux-saga/effects';
import {  FETCH_ALL_POST_ACTION,
  SAVE_ADD_DATA,
  FETCH_CURRENT_POST_ACTION,
  API_ENDPOINT_DUMMY_BASE_URL
} from "../constants";

import { fetchPostsSuccess,
   fetchPostsError,
   getCurrentPostsActionSuccess, 
   getCurrentPostsActionError,
   addPostsSuccess,
   addPostsError,
  } from "../actions/commonAction";


export function fetchPosts() {
  return axios.get(API_ENDPOINT_DUMMY_BASE_URL + 'posts?_limit=10');
};

export function fetchCurrentPost(id) {
  return axios.get(API_ENDPOINT_DUMMY_BASE_URL + 'posts/'+id);
};

export function savePosts(formData) {
  return axios.post(API_ENDPOINT_DUMMY_BASE_URL + 'posts', {userId:1,id:108,...formData});
}

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


function* addPostsSagaWatcher(actions){
  try {
    const response = yield call(savePosts,actions.formData);
    if (response.status === 200 || response.status === 201) {
        return yield put(addPostsSuccess(response.data));
    }
      return yield put(addPostsError(response.error));
  } catch (err) {
    return yield put(addPostsError(err.message));
  }
}

export function* addPostSaga(){
  yield takeLatest(SAVE_ADD_DATA, addPostsSagaWatcher);
}


function* getCurrentPostSagaWatcher(actions){
  try {
    const response = yield call(fetchCurrentPost,actions.postId);
    if (response.status === 200) {
        return yield put(getCurrentPostsActionSuccess(response.data));
    }
      return yield put(getCurrentPostsActionError(response.error));
  } catch (err) {
    return yield put(getCurrentPostsActionError(err.message));
  }
}

export function* getCurrentPost(){
  yield takeLatest(FETCH_CURRENT_POST_ACTION, getCurrentPostSagaWatcher);
}
