class Auth {
    static login(token) {
      localStorage.setItem('token', token);
    }
  
    static logout() {
      localStorage.removeItem('token');
    }
  
    static isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
  }
  
  export default Auth;