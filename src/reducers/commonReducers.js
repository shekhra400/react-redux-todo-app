
import {  FETCH_ALL_POST_ACTION,
        FETCH_ALL_POST_ACTION_SUCCESS,
        FETCH_ALL_POST_ACTION_ERROR,
        FETCH_CURRENT_POST_ACTION,
        FETCH_CURRENT_POST_ACTION_ERROR,
        FETCH_CURRENT_POST_ACTION_SUCCESS
        } from "../constants";


 const initialPostState = {data:[],isFetching:false,error: null};

 export function postsReducer(state = initialPostState,action){
   let updatedState;
   switch (action.type) {
     case FETCH_ALL_POST_ACTION:
        updatedState = Object.assign({}, state, { isFetching: true });
        break;
    case FETCH_ALL_POST_ACTION_SUCCESS:
        updatedState = Object.assign({}, state, { isFetching: false,data:action.data });
        break;
    case FETCH_ALL_POST_ACTION_ERROR:
        updatedState = Object.assign({}, state, { isFetching: false,error:action.error });
        break;
     default:
        updatedState = state;
        break;
   }
    return updatedState;
 }

 const initialState = {data:{},isFetching:false,error: null};

 export function currentPostsReducer(state = initialState,action){
    let updatedState;
    switch (action.type) {
      case FETCH_CURRENT_POST_ACTION:
         updatedState = Object.assign({}, state, { isFetching: true });
         break;
     case FETCH_CURRENT_POST_ACTION_SUCCESS:
         updatedState = Object.assign({}, state, { isFetching: false,data:action.data });
         break;
     case FETCH_CURRENT_POST_ACTION_ERROR:
         updatedState = Object.assign({}, state, { isFetching: false,error:action.error });
         break;
      default:
         updatedState = state;
         break;
    }
     return updatedState;
  }
