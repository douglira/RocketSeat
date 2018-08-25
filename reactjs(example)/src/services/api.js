import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

api.interceptors.request.use(
  (req) => {
    const token = Cookies.get('SS_TOKEN');

    if (token) {
      const bearer = `Bearer ${token}`;
      req.headers.authorization = bearer;
      return req;
    }
    return req;
  },
  (err) => {
    console.log('ERROR_AXIOS_INTERCEPTOR', err);
    return Promise.reject(err);
  },
);

export default api;
