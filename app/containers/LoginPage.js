import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from '../components/Login';
import * as LoginActions from '../actions/login';

function mapStateToProps(state) {
  return {
    loggingIn: state.login.loggingIn,
    serverField: state.login.serverField
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
