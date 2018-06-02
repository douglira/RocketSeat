export const Types = {
  PUSH_NOTIFICATION: 'notification/PUSH_NOTIFICATION',
  SHOW_NOTIFICATION: 'notification/SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'notification/HIDE_NOTIFICATION',
};

export const Creators = {
  pushNotification: text => ({
    type: Types.PUSH_NOTIFICATION,
    payload: { text },
  }),

  showNotification: text => ({
    type: Types.SHOW_NOTIFICATION,
    payload: { text },
  }),

  hideNotification: () => ({
    type: Types.HIDE_NOTIFICATION,
  }),
};

const INITIAL_STATE = {
  text: '',
  visible: false,
};

export default function notificationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_NOTIFICATION:
      return { text: action.payload.text, visible: true };
    case Types.HIDE_NOTIFICATION:
      return { ...state, visible: false };
    default:
      return state;
  }
}
