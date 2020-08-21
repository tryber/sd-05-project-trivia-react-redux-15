import {
  REQUEST_QUESTIONS,
  RECEVEID_QUESTIONS_SUCCESS,
  RECEVEID_QUESTIONS_FAIL,
} from '../actions/actionsFetchPerguntas';

const initialState = {
  isFetching: false,
  data: [],
  error: '',
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, isFetching: true };
    case RECEVEID_QUESTIONS_SUCCESS:
      return { ...state, data: [...action.data.results], isFetching: false };
    case RECEVEID_QUESTIONS_FAIL:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
}

export default questionsReducer;
