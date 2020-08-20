import React from 'react';
import CustomInput from './CustomInput';
import loginRequirements from '../services/loginRequirements';
import { browserHistory } from 'react-router';


class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: '',
      Email: '',
      Disabled: true,
    };
    this.inputs = this.inputs.bind(this);
    this.stateUpdater = this.stateUpdater.bind(this);
  }

  stateUpdater({ target }) {
    const { name, value } = target;
    const { Nome, Email } = this.state;
    this.setState(() => ({ [name]: value }));
    if(Nome !== '' && Email !== '') {
      this.setState({Disabled: false});
    }
  }

  inputs() {
    return (
      loginRequirements.map(({ name, type, dataTestId }) => (
      <CustomInput
        key={name}
        name={name}
        type={type}
        value={this.state[name]}
        placeholder={name}
        dataTestId={dataTestId}
        onChange={this.stateUpdater}
      />
    ))
    );
  }

  render() {
    return (
      <div>
        <h1>Faça login para jogar</h1>
        <form>
          {this.inputs()}
        </form>
        <button data-testid='btn-play' disabled={this.state.Disabled} >
          Jogar!!
        </button>
      </div>
    )
  }
}

export default FormLogin;