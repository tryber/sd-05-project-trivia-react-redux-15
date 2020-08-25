import {
  REQUEST_QUESTIONS,
  RECEVEID_QUESTIONS_SUCCESS,
  RECEVEID_QUESTIONS_FAIL,
} from '../actions/actionsFetchPerguntas';

// import { SET_CRONOMETRO } from '../actions/actionCronometro'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
  tempo: 0,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, isFetching: true };
    case RECEVEID_QUESTIONS_SUCCESS:
      return { ...state, data: action.embaralhadas, isFetching: false };
    case RECEVEID_QUESTIONS_FAIL:
      return { ...state, error: action.error, isFetching: false };
    /* case SET_CRONOMETRO:
      return {...state, tempo: action.tempo }; */
    default:
      return state;
  }
};

export default questionsReducer;
