import { START, FAILURE, DAYBEFOREUPDATE } from '../actions/actions';

const dayBeforeReducer = (state = {}, action) => {
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
    case DAYBEFOREUPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default dayBeforeReducer;
