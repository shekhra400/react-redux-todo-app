import { combineReducers } from "redux";
import {postsReducer} from './reducers/commonReducers';

export default combineReducers({
  posts:postsReducer
});
