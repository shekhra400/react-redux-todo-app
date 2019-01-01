import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import rootReducers from './rootReducers';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
 var store = createStore(rootReducers,applyMiddleware(sagaMiddleware));
 sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
