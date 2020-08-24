import React from 'react';
import { Link } from 'react-router-dom';
import CustomInput from './CustomInput';
import loginRequirements from '../services/loginRequirements';
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
                name={inputData.name}
                type={inputData.type}
                dataTestId={inputData.dataTestId}
                value={this.state[inputData.name]}
                key={inputData.name}
                onChange={this.stateUpdater}
              />
          ))
          }
        </form>
        <Link to="gamepage">
          <button data-testid="btn-play" disabled={this.state.Disabled} >
            Jogar!!
          </button>
        </Link>
      </div>
    );
  }
}
export default FormLogin;