import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = import.meta.env.URL_LOCAL || process.env.URL_LOCAL;

const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, {
      email,
      password,
    });

    if (response.status === 200) {
      const { id, name, token } = response.data;
      Cookies.set('userId', id);
      Cookies.set('userName', name);
      Cookies.set('userToken', token);

      return { success: true };
    }
  } catch (error) {
    return { success: false, error: 'Erro ao fazer login. Verifique suas credenciais.' };
  }

  return { success: false, error: 'Erro desconhecido ao fazer login.' };
};

export default login;
