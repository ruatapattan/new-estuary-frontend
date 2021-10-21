import jwtDecode from "jwt-decode";

const TOKEN_NAME = "token";

const getToken = () => localStorage.getItem(TOKEN_NAME);
const setToken = (token) => localStorage.setItem(TOKEN_NAME, token);
const removeToken = () => localStorage.removeItem(TOKEN_NAME);
const user = getToken() ? jwtDecode(getToken()) : null;

export { getToken, setToken, removeToken, user };
