import fetchPerguntas from '../services/fetchPerguntas';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEVEID_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const RECEVEID_QUESTIONS_FAIL = 'RECEVEID_QUESTIONS_FAIL';

function requestQuestions() {
  return { type: REQUEST_QUESTIONS };
}

function receveidQuestionsSuccess(data) {
  localStorage.setItem('token', data);
  return { type: RECEVEID_QUESTIONS_SUCCESS, data }
}

function receveidQuestionsFail(error) {
  return { type: RECEVEID_QUESTIONS_FAIL, error }
}

export function fetchQuestions() {
  return (dispatch) => {
    dispatch(requestQuestions());
    return fetchPerguntas()
      .then(
        (data) => dispatch(receveidQuestionsSuccess(data)),
        (error) => dispatch(receveidQuestionsFail(error.message)),
    );
  };
}