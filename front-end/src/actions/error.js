export const HIDE_ERROR = 'HIDE_ERROR';
const hideError = () => ({ type: HIDE_ERROR });

export const SHOW_ERROR = 'SHOW_ERROR';
const showError = error => ({ type: SHOW_ERROR, error });

let timeout;

export const hideErrorClearTimeout = () => dispatch => {
    dispatch(hideError());
    clearTimeout(timeout);
  };

export const showErrorWithTimeout = error => dispatch => {
  dispatch(showError(error));
  clearTimeout(timeout);
  timeout = setTimeout(() => dispatch(hideError()), 5000);
};