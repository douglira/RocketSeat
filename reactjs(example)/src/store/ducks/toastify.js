export const Types = {
  DEFAULT: 'default',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

export const buildToastify = (message, type = Types.DEFAULT, options) => ({
  message,
  options: {
    ...options,
    type,
  },
});

export default (message, type = Types.DEFAULT, options) => ({
  type: 'SHOW_TOAST',
  toast: buildToastify(message, type, options),
});
