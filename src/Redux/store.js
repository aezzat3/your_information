import {createStore, applyMiddleware, combineReducers} from 'redux';
import Logger from 'redux-logger';
import Thunk from 'redux-thunk';
import TestReducer from './Reducer/TestReducer/TestReducer';

const reducers = combineReducers({
  test: TestReducer,
});

const middleware = applyMiddleware(Thunk, Logger);

export default createStore(reducers, {}, middleware);
