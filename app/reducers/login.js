import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  SET_SERVER_FIELD,
  SET_USERNAME_FIELD,
  SET_PASSWORD_FIELD,
  RESET_FIELDS,

  LOGOUT
} from '../actions/login';

const initialState = {
  loggingIn: false,
  serverField: 'http://server:8090',
  userField: 'administrator',
  passwordField: 'password',
  sessionId: '',
  error: ''
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      console.log('starting login');
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        sessionId: action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case SET_SERVER_FIELD:
      return {
        ...state,
        serverField: action.payload
      };
    case SET_USERNAME_FIELD:
      return {
        ...state,
        userField: action.payload
      };
    case SET_PASSWORD_FIELD:
      return {
        ...state,
        passwordField: action.payload
      };
    case RESET_FIELDS:
      return {
        ...state,
        serverField: initialState.serverField,
        userField: initialState.userField,
        passwordField: initialState.passwordField
      };
    case LOGOUT:
      return {
        ...state,
        sessionId: ''
      };
    default:
      return state;
  }
}
