import React from 'react';
import { connect } from 'react-redux';
import './QuestionBody.css'
import Cronometro from './Cronometro';


class QuestionBody extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      index: 0,
//      tempo: 30,
    }
    this.shuffleAnswers = this.shuffleAnswers.bind(this)
    this.questionBody = this.questionBody.bind(this)
  }

  // a funcao shuffleArray é baseada no metodo Durstenfeld shuffle, encontrado no stackoverflow (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
  /* function rrrrandom(array) {
    const array2 = array;
    array2.forEach((item, index) => {
      const novoIndex = Math.floor(Math.random() * (index + 1));
      const temp = item;
      array2[index] = array2[novoIndex];
      array2[novoIndex] = temp;
    });
    return array2;
  } */
  
  shuffleAnswers(array) {
/*     const array2 = array;
    array2.forEach((item, index) => {
      const novoIndex = Math.floor(Math.random() * (index + 1));
      const temp = item;
      array2[index] = array2[novoIndex];
      array2[novoIndex] = temp;
    });
    return array2; */
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    return shuffleArray(array)
  }

  selectedAnswer() {
    document.querySelectorAll(".answers")
    .forEach(button => { 
      button.setAttribute("disabled", "")
      if (button.getAttribute('value') === "CorrectAnswer") {
        button.setAttribute("class", "correctAnswer")
      } else { button.setAttribute("class", "wrongAnswer") }
    });
    const nextButton = document.createElement("button")
    nextButton.innerHTML = "Próxima"
    nextButton.setAttribute("trype", "button")
    nextButton.setAttribute("data-testid", "btn-next")
    nextButton.addEventListener("click", () => {return this.setState({ index: this.state.index + 1 })}) 
    document.getElementById("question-div").appendChild(nextButton)
  }
  
  /* nextQuestion(){
    this.setState({
      index: this.state.index + 1
    })
  } */

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
        <div id="question-div">
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
      </div>
    )
  }

  render() {
    const { index } = this.state
    const { perguntas } = this.props
    return (
      <div>
        <div>
   
        </div>
        {console.log(perguntas)}
        {perguntas.map((pergunta) =>  { 
          if  (perguntas.indexOf(pergunta) === index) {
            return this.questionBody(pergunta)
          }})}
        
      </div>
    )
  }

  /* componentDidMount() {
    this.intervalo = setInterval(() => {
      this.setState({ tempo: this.state.tempo - 1 })
    }, 1000)
  }

  componentWillMount () {
    clearInterval(this.intervalo)
  } */
}

const mapStateToProps = (state) => ({
  perguntas: state.questionsReducer.data,
  tmepo: state.questionsReducer.tempo,
})

export default connect(mapStateToProps)(QuestionBody)

