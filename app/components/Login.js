import React, { Component, PropTypes } from 'react';
import { TextInput, Button, ProgressCircle } from 'react-desktop/macOs';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    resetFields: PropTypes.func.isRequired,
    loggingIn: PropTypes.bool.isRequired,
    setServerField: PropTypes.func.isRequired,
    serverField: PropTypes.string.isRequired
  };

  render() {
    const {
      login,
      resetFields,
      loggingIn,
      serverField,
      setServerField
    } = this.props;

    return (
      loggingIn
        ? <ProgressCircle color="grey" size={50} />
        : <div>
            <TextInput
              value={serverField}
              width="200"
              label="Server"
              onChange={(e) => setServerField(e.target.value)}
            />
            <TextInput width="200" label="Username" />
            <TextInput width="200" label="Password" />
            <Button onClick={resetFields}>Reset</Button>
            <Button onClick={login} color="green">Login</Button>
        </div>
    );
  }
}

export default Login;

