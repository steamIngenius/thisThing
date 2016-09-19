import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  SET_SERVER_FIELD,
  RESET_FIELDS
} from '../actions/login';

const initialState = {
  loggingIn: false,
  serverField: 'http://server:8090',
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
        loggingIn: false
      };
    case SET_SERVER_FIELD:
      return {
        ...state,
        serverField: action.payload
      };
    case RESET_FIELDS:
      return {
        ...state,
        serverField: initialState.serverField
      };
    default:
      return state;
  }
}
