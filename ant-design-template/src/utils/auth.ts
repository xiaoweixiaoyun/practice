const TokenKey = 'Token';

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token: any) {
  localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  localStorage.removeItem(TokenKey);
}
