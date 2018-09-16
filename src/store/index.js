import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// enable react dev tool in Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// connect store with reducer and apply redux thunk midware
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store;