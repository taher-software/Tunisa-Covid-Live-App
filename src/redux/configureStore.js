import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import updateReducer from './LATEST/reducer/reducer';
import dayBeforeReducer from './DAYBEFORE/reducer/reducer';
import historicalReducer from './HISTORICalMONTHDATA/reducer/reducer';

const reducer = combineReducers({
  latest: updateReducer,
  dayBefore: dayBeforeReducer,
  historical: historicalReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
export default store;
