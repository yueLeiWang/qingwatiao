
import instance from '@/utils/fetch'
import Cookies from 'js-cookie'

// 获取签名
export function getSign() {
  var sign = {}
  if (Cookies.get('sign')) {
    sign = JSON.parse(Cookies.get('sign'))
  } else {
    instance.get(`/apiservice/oss/getSign`).then(res => {
      // console.log(res.data, '签名')
      var obj = res.data
      Cookies.set('sign', JSON.stringify(obj))
      sign = JSON.parse(Cookies.get('sign'))
    })
  }
  return sign
}
