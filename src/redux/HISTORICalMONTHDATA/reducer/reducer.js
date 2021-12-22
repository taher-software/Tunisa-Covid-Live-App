import { START, FAILURE, HISTORICAL } from '../actions/actions';

const historicalReducer = (state = {}, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        loading: true,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case HISTORICAL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default historicalReducer;
