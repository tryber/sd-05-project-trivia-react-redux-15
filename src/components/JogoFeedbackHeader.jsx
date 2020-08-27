import React from 'react';
import { connect } from 'react-redux';
import CryptoJS from 'crypto-js';
import propTypes from 'prop-types';

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
    const hash = CryptoJS.MD5(player.player.gravatarEmail).toString();
    return (
      this.setState({
        name: player.player.name,
        image: `https://www.gravatar.com/avatar/${hash}`,
      })
    );
  }

  render() {
    const { name, image } = this.state;
    return (
      <header>
        <img
          src={image}
          alt="player"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <div>
          Pontuacao:
        <p data-testid="header-score">{this.props.placar}</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  placar: state.questionsReducer.pontuacao,
});

JogoFeedbackHeader.propTypes = {
  placar: propTypes.number,
}.isRequired;

export default connect(mapStateToProps)(JogoFeedbackHeader);
