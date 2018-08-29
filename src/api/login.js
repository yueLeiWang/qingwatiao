import instance from '@/utils/fetch'

export function loginByUsername(obj) {
  return instance.post(`/apiservice/a/login`, obj)
}

