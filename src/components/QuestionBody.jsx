import React from 'react';
import { connect } from 'react-redux';
import './QuestionBody.css'


class QuestionBody extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      index: 1
    }
    this.shuffleAnswers = this.shuffleAnswers.bind(this)
    this.questionBody = this.questionBody.bind(this)
  }
  
  shuffleAnswers(array) {
    const array2 = array;
    array2.forEach((item, index) => {
      const novoIndex = Math.floor(Math.random() * (index + 1));
      const temp = item;
      array2[index] = array2[novoIndex];
      array2[novoIndex] = temp;
    });
    return array2; 
    /* function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    return shuffleArray(array) */
  }

  selectedAnswer() {
    document.querySelectorAll(".answers")
    .forEach(button => { 
      button.setAttribute("disabled", "")
      if (button.getAttribute('value') === "CorrectAnswer") {
        button.setAttribute("class", "correctAnswer")
      } else { button.setAttribute("class", "wrongAnswer") }
    });
  }
  
  nextQuestion(){
    this.setState({
      index: this.state.index + 1
    })
  }
  questionBody(pergunta) {
    const { correct_answer, incorrect_answers } = pergunta;
    const detalhes = [
      {
        resposta: correct_answer,
        dataTestid: 'correct-answer',
        value: 'CorrectAnswer'
      },
      {
        resposta: incorrect_answers[0],
        dataTestid: 'wrong-answer-0',
        value: 'WrongAnswer'
      },
      {
        resposta: incorrect_answers[1],
        dataTestid: 'wrong-answer-1',
        value: 'WrongAnswer'
      },
      {
        resposta: incorrect_answers[2],
        dataTestid: 'wrong-answer-2',
        value: 'WrongAnswer'
      },
    ];
    this.shuffleAnswers(detalhes)
    return (
      <div>
        <h2 data-testid="question-category">Categoria: {pergunta.category}</h2> 
        <h2 data-testid="question-text">{pergunta.question}</h2>
        <div>
          {detalhes.map((answer) => (
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
        <button type="button" 
        onClick={() => this.setState({ index: this.state.index + 1 })}>
          Proxima pergunta</button>
      </div>
    )
  }

  render() {
    const { index } = this.state
    const { perguntas } = this.props
    return (
      <div>
        Primeira
        {console.log(perguntas)}
        {perguntas.map((pergunta) =>  { 
          if  (perguntas.indexOf(pergunta) === index) {
            return this.questionBody(pergunta)
          }})}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  perguntas: state.questionsReducer.data,
})

export default connect(mapStateToProps)(QuestionBody)

