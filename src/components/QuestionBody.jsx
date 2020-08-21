import React from 'react';
import { connect } from 'react-redux';


class QuestionBody extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      question: [],
      index: 0
    }
    this.shuffleAnswers = this.shuffleAnswers.bind(this)
//    this.questionBody = this.questionBody.bind(this)
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
    document.querySelectorAll(".answers-div").forEach(button => button.setAttribute("disabled", ""));
  }
  
  componentDidUpdate() {
  function questionBody(pergunta) {
    const { correct_answer, incorrect_answers } = pergunta;
    const detalhes = [
      {
        resposta: correct_answer,
        dataTestid: 'correct-answer',
      },
      {
        resposta: incorrect_answers[0],
        dataTestid: 'wrong-answer-0',
      },
      {
        resposta: incorrect_answers[1],
        dataTestid: 'wrong-answer-1',
      },
      {
        resposta: incorrect_answers[2],
        dataTestid: 'wrong-answer-2',
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
              className="answers-div"
            >
              {answer.resposta}
            </button>))
          }
        </div>
      </div>
    )
  }
  return questionBody(pergunta)
}

  /* componentDidMount() {
    const { perguntas } = this.props
    this.setState({ question: perguntas})
  } */

  setando() {
    const { perguntas } = this.props
    this.setState({ question: perguntas})
  }

  render() {
    const { perguntas } = this.props
   /*  const questions = perguntas.map(pergunta => [pergunta])
    console.log(questions) */
    /* const { index } = this.state
    {this.questionBody(perguntas)}
    {for (let pergunta = 0; pergunta === index;  pergunta++) {
      this.questionBody
    }} */
    return (
      <div>
        {console.log(perguntas)}
       {questionBody(perguntas[0])}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  perguntas: state.questionsReducer.data,
})

export default connect(mapStateToProps)(QuestionBody)

