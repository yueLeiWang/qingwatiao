import instance from '@/utils/fetch'
// 订单列表（分页）
export function getOrderTable(obj, pageNumber, pageSize) {
  return instance.post(`/api/order/orderInfo/listData?pageNo=` + pageNumber + '&pageSize=' + pageSize, obj)
}







