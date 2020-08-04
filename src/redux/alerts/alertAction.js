import AlertTypes from './alertTypes';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, type, timeout = 3000) => (dispatch) => {
  const id = uuidv4();
  dispatch({ type: AlertTypes.SET_ALERT, payload: { msg, type, id } });

  setTimeout(
    () => dispatch({ type: AlertTypes.REMOVE_ALERT, payload: id }),
    timeout
  );
};
export const removeAlert = (id) => (dispatch) => {
  dispatch({ type: AlertTypes.REMOVE_ALERT, payload: id });
};
