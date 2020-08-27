import fetchPerguntas from '../services/fetchPerguntas';
import shuffleAnswers from '../services/shuffler';

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEVEID_QUESTIONS_SUCCESS = 'REQUEST_QUESTIONS_SUCCESS';
export const RECEVEID_QUESTIONS_FAIL = 'RECEVEID_QUESTIONS_FAIL';
export const RECEVEID_GAME_INFO = 'RECEVEID_GAME_INFO';

export function receveidGameInfo(nome, email, acertos, pontuacao) {
  const stateInicial = { player: {
    name: nome,
    gravataEmail: email,
    assertions: acertos,
    score: pontuacao,
  } };
  localStorage.setItem('state', JSON.stringify(stateInicial));
  return { type: RECEVEID_GAME_INFO, nome, email, acertos, pontuacao };
}

function requestQuestions() {
  return { type: REQUEST_QUESTIONS };
}

function receveidQuestionsSuccess(data) {
  const { results } = data;

  const embaralhadas = results.map((pergunta) => {
    const { correct_answer, incorrect_answers } = pergunta;
    const detalhes = [
      {
        resposta: correct_answer,
        dataTestid: 'correct-answer',
        value: 'CorrectAnswer',
      },
      {
        resposta: incorrect_answers[0],
        dataTestid: 'wrong-answer-0',
        value: 'WrongAnswer',
      },
      {
        resposta: incorrect_answers[1],
        dataTestid: 'wrong-answer-1',
        value: 'WrongAnswer',
      },
      {
        resposta: incorrect_answers[2],
        dataTestid: 'wrong-answer-2',
        value: 'WrongAnswer',
      },
    ];
    shuffleAnswers(detalhes);
    return { ...pergunta, respostas: detalhes };
  });
  return { type: RECEVEID_QUESTIONS_SUCCESS, embaralhadas };
}
function receveidQuestionsFail(error) {
  return { type: RECEVEID_QUESTIONS_FAIL, error };
}
export function fetchQuestions(token) {
  return (dispatch) => {
    dispatch(requestQuestions());
    return fetchPerguntas(token)
      .then(
        (data) => dispatch(receveidQuestionsSuccess(data)),
        (error) => dispatch(receveidQuestionsFail(error.message)),
    );
  };
}
