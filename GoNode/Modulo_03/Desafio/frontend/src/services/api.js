import axios from 'axios';
import io from 'socket.io-client';

const apiURL = 'http://127.0.0.1:3001';
const baseURL = `${apiURL}/api`;

const api = axios.create({
  baseURL,
  withCredentials: true,
});

const socket = io(apiURL, {
  secure: true,
});

export { api, socket };
