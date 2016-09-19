import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SET_SERVER_FIELD = 'SET_SERVER_FIELD';
export const SET_USERNAME_FIELD = 'SET_USERNAME_FIELD';
export const SET_PASSWORD_FIELD = 'SET_PASSWORD_FIELD';

export const RESET_FIELDS = 'RESET_FIELDS';

export function login() {
  return (dispatch, getState) => {
    const { serverField:server } = getState().login;
    dispatch({ type: LOGIN_START });
    axios.get(`${server}/api/v1/auth/public-key`)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch(e => {
        dispatch({ type: LOGIN_FAIL, payload: e});
      });
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
