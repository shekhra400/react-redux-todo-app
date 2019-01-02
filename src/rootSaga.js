import { all } from 'redux-saga/effects';
import { postsSaga,addPostSaga } from './sagas/commonSaga';
// import watchers from other files
export default function* rootSaga() {
  yield all([
    postsSaga(),
    addPostSaga()
  ]);
}
