import axios from 'axios';
import crypto from '../utils/crypto';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';

export const SET_SERVER_FIELD = 'SET_SERVER_FIELD';
export const SET_USERNAME_FIELD = 'SET_USERNAME_FIELD';
export const SET_PASSWORD_FIELD = 'SET_PASSWORD_FIELD';

export const RESET_FIELDS = 'RESET_FIELDS';

export function login() {
  return (dispatch, getState) => {
    const {
      serverField:server,
      userField:user,
      passwordField:password
    } = getState().login;

    dispatch({ type: LOGIN_START });
    getKey(`${server}/api/v1/auth/public-key`)
      .then(key => {
        const hardPass = key.encrypt_b64(password);
        axios.post(`${server}/api/v1/auth/login`, {
          userName: user,
          encryptedPassword: hardPass
        }).then(res => {
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.session });
        });
      })
      .catch(e => {
        dispatch({ type: LOGIN_FAIL, payload: e});
      });
  };
}

export function logout() {
  return (dispatch, getState) => {
    const {
      sessionId,
      serverField:server
    } = getState().login;

    axios.post(`${server}/api/v1/auth/logout?session=${sessionId}`)
      .then(res => {
        dispatch({ type: LOGOUT });
      }).catch(e => console.log(e));
  };
}

export function resetFields() {
  return (dispatch) => {
    dispatch({ type: RESET_FIELDS });
  };
}

export function setServerField(value) {
  return dispatch => {
    dispatch({
      type: SET_SERVER_FIELD,
      payload: value
    });
  };
}

export function setPasswordField(value) {
  return dispatch => {
    dispatch({
      type: SET_PASSWORD_FIELD,
      payload: value
    });
  };
}

export function setUserField(value) {
  return dispatch => {
    dispatch({
      type: SET_USERNAME_FIELD,
      payload: value
    });
  };
}

function getKey(keyServer) {
  return axios.get(keyServer)
    .then(res => {
      const { modulusBase16, exponent } = res.data;
      let key = new crypto();

      key.setPublic(modulusBase16, Number(exponent).toString(16));
      return key;
    });
}
