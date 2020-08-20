import React from 'react';

class CustomInput extends React.Component {
  render() {
    const { name, dataTestId, value, type, onChange } = this.props;
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
export default CustomInput;