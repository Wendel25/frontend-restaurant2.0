import axios from 'axios';

import ReturnAuthorizationToken from '../api.headers';

const baseURL = import.meta.env.URL_LOCAL || process.env.URL_LOCAL;

const APIMethodPost = async (route, params) => {
  try {
    const headers = ReturnAuthorizationToken();

    const response = await axios.post(`${baseURL}/${route}`, params, { headers });

    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export default APIMethodPost;
