class Auth {
  constructor() {
    this.tokenKey = 'userToken';
  }

  static getToken() {
    const cookies = document.cookie.split('; ').reduce((prev, current) => {
      const [name, value] = current.split('=');
      prev[name] = value;
      return prev;
    }, {});

    const token = cookies.userToken;
    return token;
  }

  static isAuthenticated() {
    const token = this.getToken();
    const isAuthenticated = token !== undefined && token !== '';
    return isAuthenticated;
  }

  static redirectToLogin() {
    window.location.href = '/login';
  }

  static secureRoute() {
    if (!this.isAuthenticated()) {
      this.redirectToLogin();
    } else {
      console.log('User is authenticated. Proceeding...');
    }
  }
}

export default Auth;
