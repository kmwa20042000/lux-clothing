import AlertTypes from './alertTypes';

const INITIAL_STATE = [];

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case AlertTypes.SET_ALERT:
      return [payload];
    case AlertTypes.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
export default alertReducer;
