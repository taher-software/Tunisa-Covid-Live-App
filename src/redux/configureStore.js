import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import updateReducer from './LATEST/reducer/reducer';
import dayBeforeReducer from './DAYBEFORE/reducer/reducer';

const reducer = combineReducers({
  latest: updateReducer,
  dayBefore: dayBeforeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;
