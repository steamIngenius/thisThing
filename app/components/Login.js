import React, { Component, PropTypes } from 'react';
import { TextInput, Button, ProgressCircle } from 'react-desktop/macOs';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    resetFields: PropTypes.func.isRequired,
    loggingIn: PropTypes.bool.isRequired,
    setServerField: PropTypes.func.isRequired,
    setUserField: PropTypes.func.isRequired,
    setPasswordField: PropTypes.func.isRequired,
    serverField: PropTypes.string.isRequired,
    userField: PropTypes.string.isRequired,
    passwordField: PropTypes.string.isRequired,
    sessionId: PropTypes.string
  };

  render() {
    const {
      login,
      logout,
      resetFields,
      loggingIn,
      serverField,
      setServerField,
      userField,
      setUserField,
      passwordField,
      setPasswordField,
      sessionId
    } = this.props;

    return (
      loggingIn
        ? <ProgressCircle color="grey" size={50} />
        : sessionId.length
          ? <div>
              <Button onClick={logout}>Logout</Button>
            </div>
          : <div>
              <TextInput
                value={serverField}
                width="200"
                label="Server"
                onChange={e => setServerField(e.target.value)}
              />
              <TextInput
                value={userField}
                width="200"
                label="Username"
                onChange={e => setUserField(e.target.value)}
              />
              <TextInput
                value={passwordField}
                width="200"
                label="Password"
                onChange={e => setPasswordField(e.target.value)}
              />
              <Button onClick={resetFields}>Reset</Button>
              <Button onClick={login} color="green">Login</Button>
          </div>
    );
  }
}

export default Login;

