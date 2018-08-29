import instance from '@/utils/fetch'
//个人简历信息获取
export function getpersonalResume() {
  return instance.get(`/api/resume/get`)
}
