export const Types = {
  PUSH_INFO: 'toast/PUSH_INFO',
  PUSH_ERROR: 'toast/PUSH_ERROR',
  RESET: 'toast/RESET',
};

export const Creators = {
  toastfyInfo: text => ({
    type: Types.PUSH_INFO,
    payload: { text, topic: 'info' },
  }),

  toastfyError: text => ({
    type: Types.PUSH_ERROR,
    payload: { text, topic: 'error' },
  }),

  reset: () => ({
    type: Types.RESET,
  }),
};

const INITIAL_STATE = {
  text: '',
  topic: '',
};

export default function toastReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PUSH_INFO:
      return { ...action.payload };
    case Types.PUSH_ERROR:
      return { ...action.payload };
    case Types.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
