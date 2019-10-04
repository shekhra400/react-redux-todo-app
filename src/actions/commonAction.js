
import {  FETCH_ALL_POST_ACTION,
          FETCH_ALL_POST_ACTION_ERROR,
          FETCH_ALL_POST_ACTION_SUCCESS,
          SAVE_ADD_DATA,
          FETCH_CURRENT_POST_ACTION,
          FETCH_CURRENT_POST_ACTION_SUCCESS,
          FETCH_CURRENT_POST_ACTION_ERROR,
          ADD_POST_ACTION_ERROR,
          ADD_POST_ACTION_SUCCESS
} from "../constants";

export function getAllPostsAction(payload){
  return {
    type: FETCH_ALL_POST_ACTION,
    payload
  }
}

export function fetchPostsSuccess(data){
  return {
    type: FETCH_ALL_POST_ACTION_SUCCESS,
    data
  }
}

export function fetchPostsError(error){
  return {
    type: FETCH_ALL_POST_ACTION_ERROR,
    error
  }
}

export function addPostsSuccess(data){
  return {
    type: ADD_POST_ACTION_SUCCESS,
    data
  }
}

export function addPostsError(error){
  return {
    type: ADD_POST_ACTION_ERROR,
    error
  }
}

export function saveAddData(formData){
  return {
    type: SAVE_ADD_DATA,
    formData
  }
}

export function getCurrentPostsAction(postId){
  return {
    type: FETCH_CURRENT_POST_ACTION,
    postId
  }
}

export function getCurrentPostsActionSuccess(data){
  return {
    type: FETCH_CURRENT_POST_ACTION_SUCCESS,
    data
  }
}

export function getCurrentPostsActionError(error){
  return {
    type: FETCH_CURRENT_POST_ACTION_ERROR,
    error
  }
}
