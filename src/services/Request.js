import { toFormData } from '../utils/toFormData';
import axios from './axiosApi';

export const request = ({
  url,
  method,
  params,
  data,
}) => {
  let url_params_part = '';

  if (params) {
  Object.entries(params).map((item) => { url_params_part += `${item[1]}/`; });
  url_params_part = url_params_part.slice(0, -1);
  url = url_params_part !== '' ? `${url}/${url_params_part}` : `${url}`;
}
  const headers = {
    'X-ID': localStorage.getItem('id'),
    'X-Token': localStorage.getItem('token'),
  };
  console.log(data, params);

  try {
    return axios({
      method,
      url,
      data: toFormData(data),
      params: {},
      headers,
    });
  } catch (error) {
    const res = error.response;
    const errorMessage = res ? res.data.message : 'Check your connection';
    // alert(errorMessage);
    throw new Error(errorMessage);
  }
};
