import React from 'react';
import { Link } from 'react-router-dom';
// import FormLogin from '../components/FormLogin';

class Classificacao extends React.Components {
  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Link to="/home">
          <button data-testid="btn-go-home">Home</button>
        </Link>
      </div>
    );
  }
}

export default Classificacao;
