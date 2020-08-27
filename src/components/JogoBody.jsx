import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/actionsFetchPerguntas';
import QuestionBody from '../components/QuestionBody.jsx';
import JogoFeedbackHeader from './JogoFeedbackHeader';


class JogoBody extends React.Component {
  componentDidMount() {
    const { fetchData, token } = this.props;
    fetchData(token);
  }

  render() {
    const { isFetching, perguntas } = this.props;
    if (isFetching === true) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <h1>Pergunta</h1>
        <JogoFeedbackHeader />
        <QuestionBody perguntas={perguntas} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (token) => dispatch(fetchQuestions(token)),
});

const mapStateToProps = (state) => ({
  isFetching: state.questionsReducer.isFetching,
  perguntas: state.questionsReducer.data,
  token: state.tokenReducer.token,
});

JogoBody.propTypes = {
  fetchData: PropTypes.func,
}.isRequired;

// export default JogoBody
export default connect(mapStateToProps, mapDispatchToProps)(JogoBody);
