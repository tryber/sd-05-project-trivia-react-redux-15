import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Feedback.css';
import dogTriste from '../dog-triste.gif';
import parabens from '../parabens.gif';
import JogoFeedbackHeader from '../components/JogoFeedbackHeader';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.placarFinal = this.placarFinal.bind(this);
  }

  placarFinal() {
    const { acertos, placar } = this.props;
    return (
      <div>
        <p>PLACAR FINAL:</p>
        <div className="placar" data-testid="feedback-total-score">
          {placar}
        </div>
        <p>VOCÊ ACERTOU:</p>
        <div className="acertos" data-testid="feedback-total-question">
          {acertos}
        </div>
      </div>
    );
  }

  render() {
    const { acertos } = this.props;
    return (
      <div>
        <JogoFeedbackHeader />
        {this.placarFinal()}
        <div className="texto-resultado" data-testid="feedback-text">
          {acertos >= 3 ?
            <div className="mandou-bem">
              <h2>Mandou bem!</h2>
              <img src={parabens} alt="parabens" />
            </div>
            :
            <div className="podia-ser-melhor">
              <h2>Podia ser melhor...</h2>
              <img src={dogTriste} alt="cachorro-triste" />
            </div>
          }
        </div>
        <Link to="/">
          <button className="btn-two" data-testid="btn-play-again">Jogar Novamente</button>
        </Link>
        <Link to="/ranking">
          <button className="btn-two" data-testid="btn-ranking">Ver Ranking</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  acertos: state.questionsReducer.acertos,
  placar: state.questionsReducer.pontuacao,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  acertos: propTypes.number,
  placar: propTypes.number,
}.isRequired;

// export default Feedback;
