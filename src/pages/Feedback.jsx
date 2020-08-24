import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import propTypes from 'prop-types';
import '../Feedback.css';
import dogTriste from '../dog-triste.gif';
import parabens from '../parabens.gif';

class Feedback extends React.Component {
  render() {
    // const { acertos, placar } = this.props;
    const acertos = 4; // apagar
    return (
      <div>
        {/* importar o header */}
        <div className="placar" data-testid="feedback-total-score">
          PLACAR FINAL: <br>{/* {placar} */}</br>
        </div>
        <div className="acertos" data-testid="feedback-total-question">
          VOCÊ ACERTOU: <br>{/* {acertos} */}</br>
        </div>
        <div className="texto-resultado" data-testid="feedback-text">
          {acertos < 3 ?
            <div className="podia-ser-melhor">
              <h2>Podia ser melhor...</h2>
              <img src={dogTriste} alt="cachorro-triste" />
            </div>
            :
            <div className="mandou-bem">
              <h2>Mandou bem!</h2>
              <img src={parabens} alt="parabens" />
            </div>
          }
        </div>
        <Link to="/home">
          <button className="btn-two" data-testid="btn-play-again">
            Jogar Novamente
          </button>
        </Link>
        <Link to="/ranking">
          <button className="btn-two" data-testid="btn-ranking">
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
