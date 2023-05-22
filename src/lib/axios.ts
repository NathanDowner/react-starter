import Axios, { AxiosError } from 'axios';
import { storage } from '../utils/storage';

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL as string,
});

axios.interceptors.request.use(
  (config) => {
    const token = storage.getToken();

    if (token) {
      config.headers!['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // TODO have a switch statement to catch errors and check the request's response url and the status 404 etc to write custome error messages

    if (error.response?.status === 401) {
      storage.clearAuthData();
    }
    return Promise.reject(error);
  }
);
