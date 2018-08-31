// import Cookies from 'js-cookie'

const TokenKey = 'sessionId'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function userType() {
  return localStorage.getItem('type')
}
