import instance from '@/utils/fetch'

export function loginByUsername(obj) {
  return instance.post(`/apiservice/a/login`, obj)
}

export function logout() {  // 退出
  return instance.post(`/apiservice/a/logout`)
}

export function getUserInfo() { // 侧边栏
  return instance.get(`/apiservice/a/sys/user/menuData`)
}

export function getArea() { // 省市区
  return instance.get(`/apiservice/a/sys/area/listData`)
}
export function getButton() { // 按钮
  return instance.get(`/apiservice/a/sys/user/getButtons`)
}
