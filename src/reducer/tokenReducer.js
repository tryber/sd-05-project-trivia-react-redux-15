import {
  REQUESTING_TOKEN,
  FOUND_TOKEN,
  TOKEN_NOT_FOUND,
} from '../actions/actionsFetchToken';

const INICIAL_STATE = {
  isFetching: false,
  data: [],
  error: '',
};

const TokenReducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case REQUESTING_TOKEN:
      return { ...state, isFetching: true };
    case FOUND_TOKEN:
      return { ...state, data: [...action.data.results], isFetching: false };
    case TOKEN_NOT_FOUND:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
};

export default TokenReducer;