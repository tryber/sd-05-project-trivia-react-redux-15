import React from 'react';
import { connect } from 'react-redux';
import './QuestionBody.css'
//import Cronometro from './Cronometro';


class QuestionBody extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      index: 0,
      tempo: 30,
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
    const { index, tempo } = this.state
    const { perguntas } = this.props
    return (
      <div>
        <div>
          <h1>Tempo: {tempo}</h1>
        </div>
        Primeira
        {console.log(perguntas)}
        {perguntas.map((pergunta) =>  { 
          if  (perguntas.indexOf(pergunta) === index) {
            return this.questionBody(pergunta)
          }})}
        
      </div>
    )
  }
  componentDidMount() {
    this.intervalo = setInterval(() => {
        if (this.state.tempo !== 0) {
         
      this.setState( prevState => ({ tempo: prevState.tempo - 1 }))}
    }, 1000)
  }
}


const mapStateToProps = (state) => ({
  perguntas: state.questionsReducer.data,
})

export default connect(mapStateToProps)(QuestionBody)

