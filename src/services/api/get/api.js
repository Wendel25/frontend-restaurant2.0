import axios from 'axios';

import ReturnAuthorizationToken from '../api.headers';

const baseURL = import.meta.env.URL_LOCAL || process.env.URL_LOCAL;

const APIMethodGet = async (route, params) => {
  try {
    const headers = ReturnAuthorizationToken();

    const queryParams = new URLSearchParams(params).toString();

    const response = await axios.get(`${baseURL}/${route}?${queryParams}`, { headers });

    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export default APIMethodGet;
