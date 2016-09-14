export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const RESET_FIELDS = 'RESET_FIELDS';

export function login() {
  return (dispatch) => {
    dispatch({ type: LOGIN_START });
  }
}

export function resetFields() {
  return (dispatch) => {
    dispatch({ type: RESET_FIELDS });
  }
}
