import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/actionsFetchPerguntas';
import { Link } from 'react-router-dom'



class homepage extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return(
      <div>
        <h1>home</h1>
        <Link to="/gamepage" > game </Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchQuestions()),
});


export default connect(null, mapDispatchToProps)(homepage);