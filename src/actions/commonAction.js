
import {  FETCH_ALL_POST_ACTION,
          FETCH_ALL_POST_ACTION_ERROR,
          FETCH_ALL_POST_ACTION_SUCCESS,
          SAVE_ADD_DATA } from "../constants";

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

export function saveAddData(formData){
  return {
    type: SAVE_ADD_DATA,
    formData
  }
}
