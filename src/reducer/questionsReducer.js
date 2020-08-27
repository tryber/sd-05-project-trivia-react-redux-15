import {
  REQUEST_QUESTIONS,
  RECEVEID_QUESTIONS_SUCCESS,
  RECEVEID_QUESTIONS_FAIL,
  RECEVEID_GAME_INFO,
} from '../actions/actionsFetchPerguntas';

// import { SET_CRONOMETRO } from '../actions/actionCronometro'

const initialState = {
  isFetching: false,
  data: [],
  error: '',
  tempo: 0,
  nome: '',
  email: '',
  acertos: 0,
  pontuacao: 0,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return { ...state, isFetching: true };
    case RECEVEID_QUESTIONS_SUCCESS:
      return { ...state, data: action.embaralhadas, isFetching: false };
    case RECEVEID_QUESTIONS_FAIL:
      return { ...state, error: action.error, isFetching: false };
    case RECEVEID_GAME_INFO:
      return {
        ...state,
        nome: action.nome,
        email: action.email,
        acertos: action.acertos,
        pontuacao: action.pontuacao };
    /* case SET_CRONOMETRO:
      return {...state, tempo: action.tempo }; */
    default:
      return state;
  }
};

export default questionsReducer;
