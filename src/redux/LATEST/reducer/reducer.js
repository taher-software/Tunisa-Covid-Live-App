import { START, FAILURE, LASTUPDATE } from '../actions/actions';

const updateReducer = (state = {}, action) => {
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
    case LASTUPDATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default updateReducer;
