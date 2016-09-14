import React, { Component, PropTypes } from 'react';
import { TextInput, Button } from 'react-desktop/windows';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    resetFields: PropTypes.func.isRequired
  };

  render() {
    const { login, resetFields } = this.props;

    return (
      <div>
        <TextInput label="server" />
        <TextInput label="username" />
        <TextInput label="password" />
        <Button onClick={resetFields} color="">Reset</Button>
        <Button onClick={login} color="green">Login</Button>
      </div>
    );
  }
}

export default Login;
