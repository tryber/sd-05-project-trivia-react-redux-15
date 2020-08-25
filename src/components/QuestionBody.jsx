import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './QuestionBody.css';
// import Cronometro from './Cronometro';


class QuestionBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tempo: 30,
    };
//  this.shuffleAnswers = this.shuffleAnswers.bind(this);
    this.questionBody = this.questionBody.bind(this);
  }

  componentDidMount() {
    this.intervalo = setInterval(() => {
      if (this.state.tempo !== 0) {
        this.setState((prevState) => ({ tempo: prevState.tempo - 1 }));
      }
    }, 1000);
  }

  selectedAnswer() {
    document.querySelectorAll('.answers')
    .forEach((button) => {
      button.setAttribute('disabled', '');
      if (button.getAttribute('value') === 'CorrectAnswer') {
        button.setAttribute('class', 'correctAnswer');
      } else { button.setAttribute('class', 'wrongAnswer'); }
    });
    const nextButton = document.createElement('button');
    nextButton.setAttribute('data-testid', 'btn-next');
    nextButton.setAttribute('type', 'button');
    nextButton.innerHTML = 'Próxima';
    nextButton.addEventListener('click', () => this.setState({ index: this.state.index + 1 }));
    document.getElementById('question-body').appendChild(nextButton);
  }

/*   shuffleAnswers(array) {
    const array2 = array;
    array2.forEach((item, index) => {
      const novoIndex = Math.floor(Math.random() * (index + 1));
      const temp = item;
      array2[index] = array2[novoIndex];
      array2[novoIndex] = temp;
    });
    return array2;
  } */
  
/* componentDidUpdate() {
  const { perguntas } = this.props
  perguntas.map((pergunta) => {
    if (perguntas.indexOf(pergunta) === this.state.index) {
      return this.questionBody(pergunta);
    }
    return null;
})} */

  questionBody(pergunta) {
    /* const { correct_answer, incorrect_answers } = pergunta;
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
    this.shuffleAnswers(detalhes); */
    
    console.log(pergunta[this.state.index])
    const question1 = pergunta[this.state.index]

    return (
      <div id="question-body">
        <h2 data-testid="question-category">Categoria: {question1.category}</h2>
        <h2 data-testid="question-text">{question1.question}</h2>
        {/* {console.log(pergunta[0])} */}
        <div>
          {question1.respostas.map((answer) => (
            <button
              type="button"
              data-testid={`${answer.dataTestid}`}
              onClick={() => this.selectedAnswer()}
              className="answers"
              value={answer.value}
            >
              {answer.resposta}
            </button>))
          }
        </div>
      </div>
    );
  }

  render() {
    const { index, tempo } = this.state;
    const { perguntas } = this.props;
    return (
      <div>
        <div>
          <h1>Tempo: {tempo}</h1>
        </div>
        <div>
          {/* {console.log(perguntas)} */}
          {perguntas.map((pergunta) => {
            if (perguntas.indexOf(pergunta) === index) {
              return this.questionBody(pergunta);
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  perguntas: state.questionsReducer.data,
});

QuestionBody.propTypes = {
  perguntas: PropTypes.instanceOf(Array),
}.isRequired;

export default connect(mapStateToProps)(QuestionBody);
