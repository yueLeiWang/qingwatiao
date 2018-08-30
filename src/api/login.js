import instance from '@/utils/fetch'

export function loginByUsername(obj) {
  return instance.post(`/api/sys/login`, obj)
}
export function logout() {  // 退出
  return instance.post(`/api/sys/logout`)
}
export function getUserInfo() { //用户信息
  return instance.get(`/api/a/sys/user/userInfo`)
}
export function getArea() { // 省市区
  return instance.get(`/api/sys/area/listData`)
}

