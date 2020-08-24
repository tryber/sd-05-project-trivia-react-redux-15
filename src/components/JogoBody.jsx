import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/actionsFetchPerguntas';
import QuestionBody from '../components/QuestionBody.jsx'
import JogoFeedbackHeader from './JogoFeedbackHeader';


class JogoBody extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return(
      <div>
        <h1>Pergunta</h1>
{/*         <JogoFeedbackHeader /> */}
        <QuestionBody />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchQuestions()),
});

//export default JogoBody
export default connect(null, mapDispatchToProps)(JogoBody);