import Cookies from 'js-cookie';

const baseTypeToken = import.meta.env.BASE_TYPE_TOKEN || process.env.token_type.BASE_TYPE_TOKEN;

const returnAuthorizationToken = () => {
  const token = Cookies.get('userToken');

  if (token) {
    const headers = {
      Authorization: `${baseTypeToken} ${token}`,
    };

    return headers;
  } 
  return {};
};

export default returnAuthorizationToken;
