import { combineReducers } from "redux";
import {postsReducer, currentPostsReducer} from './reducers/commonReducers';

export default combineReducers({
  posts:postsReducer,
  currentPost: currentPostsReducer
});
