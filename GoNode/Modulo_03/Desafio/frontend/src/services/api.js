import axios from 'axios';
import io from 'socket.io-client';

const baseURL = 'http://127.0.0.1:3001';

const api = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
});

const socket = io(baseURL, {
  reconnectionDelay: 500,
});

export { api, socket };
