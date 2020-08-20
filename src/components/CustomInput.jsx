import React from 'react';
import PropTypes from 'prop-types';

class CustomInput extends React.Component {
  render() {
    console.log(this.props)
    const { name, dataTestId, value, type, onChange } = this.props.inputData;
    return (
      <input
        type={type}
        required="required"
        name={name}
        placeholder={name}
        data-testid={dataTestId}
        value={value}
        onChange={onChange}
      />
    );
  }
}

CustomInput.propTypes = {
  inputData: PropTypes.shape({
    name: PropTypes.string,
    dataTestId: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
};
export default CustomInput;
