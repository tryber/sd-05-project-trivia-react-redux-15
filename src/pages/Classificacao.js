import React from 'react';
import { Link } from 'react-router-dom';


class Classificacao extends React.Components {
  render () {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <Link data-testid="btn-go-home" to='/home'>Home</Link>
      </div>
    )
  }
}

export default Classificacao;
