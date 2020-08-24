import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import loginRequirements from '../services/loginRequirements';
import { tokenFetcher } from '../actions/actionsFetchToken';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      Email: '',
      Disabled: true,
    };
    this.stateUpdater = this.stateUpdater.bind(this);
  }
  stateUpdater({ target }) {
    const { name, value } = target;
    const { Nome, Email } = this.state;
    this.setState(() => ({ [name]: value }));
    if (Nome !== '' && Email !== '') {
      this.setState({ Disabled: false });
    }
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
          <button data-testid="btn-play"
          disabled={this.state.Disabled}
          onClick={this.props.onClick} >
            Jogar!!
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: dispatch(tokenFetcher()),
});

FormLogin.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormLogin);
