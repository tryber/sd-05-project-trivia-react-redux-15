import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/actionsFetchPerguntas';
import QuestionBody from '../components/QuestionBody.jsx';
import JogoFeedbackHeader from './JogoFeedbackHeader';


class JogoBody extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <div>
        <h1>Pergunta</h1>
        <JogoFeedbackHeader />
        <QuestionBody />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchQuestions()),
});

JogoBody.propTypes = {
  fetchData: PropTypes.func,
}.isRequired;

// export default JogoBody
export default connect(null, mapDispatchToProps)(JogoBody);
