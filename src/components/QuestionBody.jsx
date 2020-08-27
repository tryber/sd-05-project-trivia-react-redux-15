import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { receveidGameInfo } from '../actions/actionsFetchPerguntas';
import './QuestionBody.css';

function selectedAnswer() {
  return (
    document.querySelectorAll('.answers')
    .forEach((button) => {
      button.setAttribute('disabled', '');
      if (button.getAttribute('value') === 'CorrectAnswer') {
        button.setAttribute('class', 'correctAnswer');
      } else { button.setAttribute('class', 'wrongAnswer'); }
    })
  );
}

function HideNextButton() {
  document.querySelectorAll('.nextButton').forEach((button) => button.setAttribute('hidden', ''));
}

function ShowNextButton() {
  document.querySelectorAll('.nextButton').forEach((button) => button.removeAttribute('hidden'));
}

class QuestionBody extends React.Component {
  constructor(props) {
    const state = JSON.parse(localStorage.getItem('state'));
    const { name, gravatarEmail } = state.player;
    super(props);
    this.state = {
      index: 0,
      tempo: 30,
      pontuacao: 0,
      acertos: 0,
      nome: name,
      email: gravatarEmail,
    };
    this.questionBody = this.questionBody.bind(this);
    this.timeIsOver = this.questionBody.bind(this);
//    this.selectedAnswer = this.selectedAnswer.bind(this);
    this.createNextButton = this.createNextButton.bind(this);
    this.saveScore = this.saveScore.bind(this);
//    this.ShowNextButton = this.ShowNextButton.bind(this);
//    this.HideNextButton = this.HideNextButton.bind(this);
    /* this.resetTimer = this.resetTimer.bind(this) */
  }

  componentDidMount() {
    this.intervalo = setInterval(() => {
      if (this.state.tempo !== 0) {
        this.setState((prevState) => ({ tempo: prevState.tempo - 1 }));
        console.log(this.state.tempo);
      }
    }, 1000);
  }

  componentDidUpdate() {
    const { nome, email, acertos, pontuacao } = this.state;
    this.props.gameInfo(nome, email, acertos, pontuacao);
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  saveScore(value) {
    clearInterval(this.intervalo);
    this.setState((prevState) => ({ tempo: prevState.tempo }));
    const dificuldade = document.getElementById('dificuldade').innerHTML;
    const selectedAnswer2 = value;
    console.log(selectedAnswer2);
    console.log(dificuldade);
    if (selectedAnswer2 === 'CorrectAnswer') {
      if (dificuldade === 'hard') {
        const calculo = 10 + (3 * this.state.tempo);
        this.setState((prevState) => ({
          pontuacao: prevState.pontuacao + calculo,
          acertos: prevState.acertos + 1,
        }));
      } else if (dificuldade === 'medium') {
        const calculo = 10 + (2 * this.state.tempo);
        this.setState((prevState) => ({
          pontuacao: prevState.pontuacao + calculo,
          acertos: prevState.acertos + 1,
        }));
      } else {
        const calculo = 10 + (1 * this.state.tempo);
        this.setState((prevState) => ({
          pontuacao: prevState.pontuacao + calculo,
          acertos: prevState.acertos + 1,
        }));
      }
      /* const { nome, email, acertos, pontuacao } = this.state;
      this.props.gameInfo(nome, email, acertos, pontuacao); */
    }
    /* const { nome, email, acertos, pontuacao } = this.state;
    this.props.gameInfo(nome, email, acertos, pontuacao); */
  }


  createNextButton() {
    if (this.state.index !== 4) {
      return (
        <div >
          <button
            className="nextButton"
            hidden
            data-testid="btn-next"
            type="button"
            onClick={() => {
              this.setState({ index: this.state.index + 1 });
              HideNextButton();
            }}
          >Próxima</button>
        </div>
      );
    }
    const { nome, email, acertos, pontuacao } = this.state;
    return (
      <div>
        <Link to="feedback">
          <button
            className="nextButton"
            hidden
            data-testid="btn-next"
            type="button"
            onClick={() => this.props.gameInfo(nome, email, acertos, pontuacao)}
          >Próxima</button>
        </Link>
      </div>
    );
  }


  questionBody(pergunta) {
    return (
      <div id="question-body">
        <p id="dificuldade">{pergunta.difficulty}</p>
        <p data-testid="question-category">Categoria: {pergunta.category}</p>
        <p data-testid="question-text">{pergunta.question}</p>
        <div>
          {pergunta.respostas.map((answer) => {
            if (answer.resposta !== undefined) {
              return (
                <button
                  type="button"
                  data-testid={`${answer.dataTestid}`}
                  onClick={(event) => {
                    this.saveScore(event.target.value);
                    selectedAnswer();
                    ShowNextButton();
                      /* this.createNextButton() */
                  }}
                  className="answers"
                  value={answer.value}
                >
                  {answer.resposta}
                </button>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }

  timeIsOver() {
    /* const { index, tempo } = this.state;
    const { perguntas } = this.props;
    perguntas.map((pergunta) => {
      if (perguntas.indexOf(pergunta) === index) {
        return this.questionBody(pergunta);
      }})
    console.log('lalalala')
    document.querySelectorAll('.answers')
    .forEach((button) => {
      button.removeAttribute('onClick')
    }) */
    selectedAnswer();
    this.createNextButton();
  }

  render() {
    const { index, tempo } = this.state;
    const { perguntas } = this.props;
    if (this.state.tempo === 0) {
      document.querySelectorAll('.answers')
      .forEach((button) => {
        button.removeAttribute('onClick');
      });
      selectedAnswer();
      this.createNextButton();
    }
    return (
      <div>
        <div>
          <p>Tempo: {tempo}</p>
        </div>
        <div className="div-question">
          {console.log(perguntas)}
          {perguntas.map((pergunta) => {
            if (perguntas.indexOf(pergunta) === index) {
              return this.questionBody(pergunta);
            }
            return null;
          })}
        </div>
        <div>
          {this.createNextButton()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  gameInfo: (nome, email, acertos, pontuacao) => {
    dispatch(receveidGameInfo(nome, email, acertos, pontuacao));
  },
});

const mapStateToProps = (state) => ({
  score: state.questionsReducer.pontuacao,
  assertions: state.questionsReducer.acertos,
  name: state.questionsReducer.nome,
  gravatarEmail: state.questionsReducer.email,
});

QuestionBody.propTypes = {
  perguntas: PropTypes.instanceOf(Array),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBody);
