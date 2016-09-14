import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/login';

const initialState = {
  loggingIn: false,
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
      return state;
    default:
      return state;
  }
}
