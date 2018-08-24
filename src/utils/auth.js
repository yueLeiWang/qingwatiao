// import Cookies from 'js-cookie'

const TokenKey = 'sessionId'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function userType() {
  return localStorage.getItem('type')
}
