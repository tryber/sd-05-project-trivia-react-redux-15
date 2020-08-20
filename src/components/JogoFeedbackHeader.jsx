import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class JogoFeedbackHeader extends React.Component {
  render() {
    const { image, name, score } = this.props;
    return (
      <div>
        <img
          src={image}
          alt="player"
          data-testid="header-profile-picture"
        />
        <h1 data-testid="header-player-name">{name}</h1>
        <h1 data-testid="header-score">Pontuação: {score}</h1>
      </div>
    );
  }
}

// Dependendo do formato do state da store, deve-se especificar o reducer na funcao mapStateToProps

const mapStateToProps = (state) => ({
  image: state.player.image,
  name: state.player.name,
  score: state.player.score,
});

JogoFeedbackHeader.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(JogoFeedbackHeader);
