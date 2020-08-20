import React from "react";
import { Link } from "react-router-dom";

class Feedback extends React.Component {
  render() {
    const score = 0;
    return (
      <div>
        <div data-testid="feedback-total-score">PLACAR FINAL:</div>
        <div data-testid="feedback-total-question">Você acertou:</div>
        <div data-testid="feedback-text">
          {score < 3 ? <h2>Podia ser melhor...</h2> : <h2>Mandou bem!</h2>}
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

export default Feedback;
