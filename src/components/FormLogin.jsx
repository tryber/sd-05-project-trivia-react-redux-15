import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import loginRequirements from '../services/loginRequirements';
import { tokenFetcher } from '../actions/actionsFetchToken';

function settingsButton() {
  return (
    <div>
      <Link to="settings">
        <button data-testid="btn-settings">Configuracoes</button>
      </Link>
    </div>
  );
}

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      Email: '',
      Disabled: true,
    };
    this.stateUpdater = this.stateUpdater.bind(this);
    this.disableCheck = this.disableCheck.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  componentDidMount() {
    const { fetchToken } = this.props;
    fetchToken();
  }

  setLocalStorage() {
    const { Nome, Email } = this.state;
    const stateInicial = { player: {
      name: Nome,
      gravataEmail: Email,
      assertions: 0,
      score: 0,
    } };
    document.getElementById('play-button').addEventListener(
      'click',
      localStorage.setItem('state', JSON.stringify(stateInicial)),
    );
  }

  disableCheck() {
    const { Nome, Email } = this.state;
    if (Nome !== '' && Email !== '') {
      this.setState(() => ({ Disabled: false }));
    } else {
      this.setState(() => ({ Disabled: true }));
    }
  }
  async stateUpdater({ target }) {
    const { name, value } = target;
    await this.setState(() => ({ [name]: value }));
    this.disableCheck();
  }

  render() {
    return (
      <div>
        <h1>Faça login para jogar</h1>
        <form>
          {
            loginRequirements.map((inputData) => (
              <CustomInput
                key={inputData.name}
                name={inputData.name}
                value={this.state[inputData.name]}
                type={inputData.type}
                dataTestId={inputData.dataTestId}
                onChange={this.stateUpdater}
              />
          ))
          }
        </form>
        <Link to="gamepage">
          <button
            data-testid="btn-play"
            disabled={this.state.Disabled}
            onClick={this.setLocalStorage}
            id="play-button"
          >
            Jogar!!
          </button>
        </Link>
        {settingsButton()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(tokenFetcher()),
});

FormLogin.propTypes = {
  fetchToken: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormLogin);
