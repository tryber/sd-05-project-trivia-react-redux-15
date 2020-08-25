import React from 'react';
// import { connect } from 'react-redux';
import CryptoJS from 'crypto-js';

class JogoFeedbackHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      score: '',
    };
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const player = JSON.parse(localStorage.getItem('state'));
    const hash = CryptoJS.MD5(player.gravatarEmail).toString();
    return (
      this.setState({
        name: player.name,
        image: `https://www.gravatar.com/avatar/${hash}`,
        score: player.score,
      })
    );
  }

  render() {
    const { name, image, score } = this.state;
    return (
      <header>
        <img
          src={image}
          alt="player"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">Pontuação: {score}</p>
      </header>
    );
  }
}

export default JogoFeedbackHeader;
