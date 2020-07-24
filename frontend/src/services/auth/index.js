import jwtDecode from 'jwt-decode';

export const TOKEN_KEY = 'Authorization';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
    const token = getToken();
    const payload = jwtPaylod();
    
    if (token && payload.name) return true;

    return false;

}

export const jwtPaylod = () => {
  const token = getToken();

  if (token) {
    const payload = jwtDecode(token);
    return payload;
  }
}
