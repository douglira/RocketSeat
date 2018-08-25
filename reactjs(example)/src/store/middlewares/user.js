import Cookies from 'js-cookie';

const logoutMiddleware = () => next => (action) => {
  if (action.logout) {
    Cookies.remove('SS_TOKEN');
  }
  return next(action);
};

export default logoutMiddleware;
