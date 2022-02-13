import axios from 'axios';

import { SERVER_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
});

axiosInstance.interceptors.response.use((res) => {
  const errorResponse = { response: { data: { message: 'Oh..Please reload and try again' } } };

  if (res) {
    if (res.status >= 200 && res.status <= 299) { // Handling HTTP success status codes
      if (res.data.hasOwnProperty('error')) {
        errorResponse.response.data.message = res.data.error;
        return Promise.reject(errorResponse);
      }
      if (typeof res === 'string' || res instanceof String) {
        errorResponse.response.data.message = 'Fatal error';
        return Promise.reject(errorResponse);
      }
      return res;
    }
    errorResponse.response = res;

    return Promise.reject(errorResponse);
  }

  return Promise.reject(errorResponse);
});

export default axiosInstance;
