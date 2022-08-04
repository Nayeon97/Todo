import axios from 'axios';

const backendPortNumber = process.env.REACT_APP_SERVER_PORT;
const serverUrl =
  'http://' + window.location.hostname + ':' + backendPortNumber + '/';

export const instance = axios.create({
  baseURL: serverUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const nonTokenInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});
