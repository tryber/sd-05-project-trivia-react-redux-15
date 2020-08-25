import React from 'react';
import PropTypes from 'prop-types';
import './QuestionBody.css';

class QuestionBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      tempo: 30,
    };
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

  questionBody(pergunta) {
    return (
      <div id="question-body">
        <p data-testid="question-category">Categoria: {pergunta.category}</p>
        <p data-testid="question-text">{pergunta.question}</p>
        <div>
          {pergunta.respostas.map((answer) => (
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
      </div>
    );
  }
}

QuestionBody.propTypes = {
  perguntas: PropTypes.instanceOf(Array),
}.isRequired;

export default QuestionBody;
