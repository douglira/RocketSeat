import axios from 'axios';

const baseURL = 'http://127.0.0.1:3001';

const api = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
});

export { api };
