import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import propTypes from 'prop-types';

class Feedback extends React.Component {
  render() {
    // const { acertos, placar } = this.props;
    const acertos = 0; // apagar
    return (
      <div>
        {/* importar o header */}
        <div data-testid="feedback-total-score">PLACAR FINAL: {/* {placar} */}</div>
        <div data-testid="feedback-total-question">Você acertou: {/* {acertos} */}</div>
        <div data-testid="feedback-text">
          {acertos < 3 ? <h2>Podia ser melhor...</h2> : <h2>Mandou bem!</h2>}
        </div>
        <Link to="/home">
          <button data-testid="btn-play-again">
            Jogar Novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button data-testid="btn-ranking">
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   acertos: state.reducerVirginia.assertions,
//   placar: state.reducerVirginia.score,
// })

// export default connect(null)(Feedback);

// Feedback.propTypes = {
//   acertos: propTypes,
//   placar: propTypes,
// };

export default Feedback;
