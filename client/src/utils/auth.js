class Auth {
  static login(token) {
    localStorage.setItem("token", token);
    window.location.assign("/");
  }

  static logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/login");
  }

  static isLoggedIn() {
    const token = Auth.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  static isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }
}

export default Auth;
