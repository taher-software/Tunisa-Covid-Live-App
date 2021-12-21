import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import updateReducer from './LATEST/reducer/reducer';

const reducer = combineReducers({
  latest: updateReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
