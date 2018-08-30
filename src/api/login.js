import instance from '@/utils/fetch'

export function loginByUsername(obj) {
  return instance.post(`/api/a/login`, obj)
}

