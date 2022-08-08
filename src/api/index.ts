import axios from 'axios';

const backendPortNumber = process.env.REACT_APP_SERVER_PORT;
const serverUrl =
  'http://' + window.location.hostname + ':' + backendPortNumber + '/';

export const instance = axios.create({
  baseURL: serverUrl,
  timeout: 20000,
});

instance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('token');
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    Promise.reject(error);
  },
);
