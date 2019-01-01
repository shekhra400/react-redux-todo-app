
import {  FETCH_ALL_POST_ACTION,
          FETCH_ALL_POST_ACTION_ERROR,
          FETCH_ALL_POST_ACTION_SUCCESS } from "../constants";

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
