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

  componentWillMount() {
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
        <h1 data-testid="header-player-name">{name}</h1>
        <h1 data-testid="header-score">Pontuação: {score}</h1>
      </header>
    );
  }
}

// Dependendo do formato do state da store, deve-se especificar o reducer na funcao mapStateToProps

/* const mapStateToProps = (state) => ({
  image: state.reducer.player.image,
  name: state.reducer.player.name,
  score: state.reducer.player.score,
});

JogoFeedbackHeader.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(JogoFeedbackHeader); */

export default JogoFeedbackHeader;
