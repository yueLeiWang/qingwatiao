import instance from '@/utils/fetch'

// 订单列表（分页）
export function getOrderTable(obj, pageNumber, pageSize) {
  return instance.post(`/apiservice/a/service/order/orderInfo/listData?pageNo=` + pageNumber + '&pageSize=' + pageSize, obj)
}
// 按ID获取订单信息
export function getOrderInf(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/formData`, obj)
}
// 更改服务时间
export function ChangeTimeData(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/timeDataList`, obj)
}
// 更换时间保存
export function saveTime(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/saveTime`, obj)
}
// 增加技师
export function addTechData(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/addTech`, obj)
}
// 增加技师保存
export function addTechSave(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/addTechSave`, obj)
}
// 改派技师
export function dispatchTechData(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/dispatchTech`, obj)
}
// 改派技师保存
export function dispatchTechSave(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/dispatchTechSave`, obj)
}
// 改派管理表格数据获取及分页
export function Reassignment(obj, pageNumber, pageSize) {
  return instance.post(`apiservice/a/service/order/orderDispatch/listData?pageNo=` + pageNumber + '&pageSize=' + pageSize, obj)
}
// 根据id获取改派记录
export function reassId(obj) {
  return instance.post(`apiservice/a/service/order/orderDispatch/formData`, obj)
}
// 改派菜单下的改派按钮
export function dispatchTechData1(obj) {
  return instance.post(`apiservice/a/service/order/orderDispatch/dispatchTech`, obj)
}
// 改派菜单下的改派保存
export function dispatchTechSave1(obj) {
  return instance.post(`/apiservice/a/service/order/orderDispatch/dispatchTechSave`, obj)
}
// 根据手机号查找客户
export function findCustomerByPhone(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/findCustomerByPhone`, obj)
}
// 根据ID查找客户
export function findCustomerById(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/findCustomerById`, obj)
}
// 获取服务项目列表
export function findItemList(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/findItemList`, obj)
}
// 获取服务项目下的商品列表
export function findGoodsListByItem(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/findGoodsListByItem`, obj)
}
// 获取商品的技师列表
export function findTechListByGoods(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/findTechListByGoods`, obj)
}
// 获取技师的时间列表
export function findTimeListByTech(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/findTimeListByTech`, obj)
}
// 新增订单保存
export function createOrder(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/createOrder`, obj)
}
// 新增组合订单保存
export function saveCombinationOrder(obj) {
  return instance.post(`/apiservice/a/service/order/combination/saveCombinationOrder`, obj)
}
// 获取建议服务时长
export function findGoodsNeedTech(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/findGoodsNeedTech`, obj)
}
// 获取多次服务时长
export function findGoodsServiceHour(obj) {
  return instance.post(`/apiservice/a/service/order/combination/findGoodsServiceHour`, obj)
}
// 选择服务时间
export function getDateList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/getDateList`, obj)
}
//
// export function createOrder(obj){
//   return instance.post(`/apiservice/a/service/order/orderInfo/createOrder`,obj)
// }
// 取消订单（组合）
export function cancelComOrder(obj) {
  return instance.post(`/apiservice/a/service/order/combination/cancelComOrder`, obj)
}
// 取消订单（普通）
export function orderCancelFun(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/orderCancel`, obj)
}
// 退款
export function orderRefundInit(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/orderRefundInit`, obj)
}
// 退款保存
export function orderRefundSave(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/orderRefundSave`, obj)
}
// 组合退款
export function comOrderRefundInit(obj) {
  return instance.post(`/apiservice/a/service/order/combination/comOrderRefundInit`, obj)
}
// 组合退款保存
export function comOrderRefundSave(obj) {
  return instance.post(`/apiservice/a/service/order/combination/comOrderRefundSave`, obj)
}
// 退款列表
export function listDataRefund(obj, pageNumber, pageSize) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/service/order/orderInfo/listDataRefund?pageNo=${pageNumber}&pageSize=${pageSize}`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

// 退款详情
export function formDataRefund(obj) {
  console.log(obj, 'obj')
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/service/order/orderInfo/formDataRefund`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}
// 收款列表
export function getPay(obj, pageNumber, pageSize) {
  return instance.post(`apiservice/a/service/order/orderInfo/listDataPay?pageNo=` + pageNumber + '&pageSize=' + pageSize, obj)
}
// 组合订单列表
export function getCombination(obj, pageNumber, pageSize) {
  return instance.post(`apiservice/a/service/order/combination/listDataCombination?pageNo=` + pageNumber + '&pageSize=' + pageSize, obj)
}
// 按组合ID获取订单详情
export function getOrderInf1(obj) {
  return instance.post(`/apiservice/a/service/order/combination/getCombinationById`, obj)
}
// 组合订单设置固定时间查询服务时间
export function saveRegularDateDateList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/saveRegularDateDateList`, obj)
}
// 组合订单设置固定时间查询技师
export function saveRegularDateTechList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/saveRegularDateTechList`, obj)
}
// 组合订单设置固定时间总保存
export function saveRegularDate(obj) {
  return instance.post(`/apiservice/a/service/order/combination/saveRegularDate`, obj)
}
// 组合订单更换固定时间总保存
export function updateRegularDate(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateRegularDate`, obj)
}
// 更换固定技师
export function updateRegularTechTechList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateRegularTechTechList`, obj)
}
// 更换固定技师保存
export function updateRegularTechSave(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateRegularTechSave`, obj)
}
// 组合订单查看备注
export function formOrderRemark(obj) {
  return instance.post(`/apiservice/a/service/order/combination/formOrderRemark`, obj)
}
// 已有订单更换时间按钮
export function updateOrderTimeDateList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateOrderTimeDateList`, obj)
}
// 已有订单更换技师按钮    参数 orderId
export function updateOrderTechInit(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateOrderTechInit`, obj)
}
// 已有订单增加 改派 技师列表    参数orderId，techName
export function updateOrderTechTechList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateOrderTechTechList`, obj)
}
// 已有订单增加保存按钮   参数 orderId，techIdList
export function updateOrderTechAddSave(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateOrderTechAddSave`, obj)
}
// 已有订单改派保存按钮    参数orderId，techIdList，techId
export function updateOrderTechDispatchSave(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateOrderTechDispatchSave`, obj)
}
// 更换服务时间中‘查询服务技师’  参数 一个是id  一个是serviceTime
export function updateOrderTimeTechList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateOrderTimeTechList`, obj)
}
// 更换服务时间中'保存'
export function updateOrderTimeSave(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateOrderTimeSave`, obj)
}
// 后台预约- 查询服务日期    serviceNum, masterId
export function subscribeDateList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/subscribeDateList`, obj)
}
// 后台预约- 查询服务技师    serviceNum，masterId，serviceTime
export function subscribeTechList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/subscribeTechList`, obj)
}
// 后台预约- 保存 serviceNum，masterId，serviceTime，techId
export function subscribeSave(obj) {
  return instance.post(`/apiservice/a/service/order/combination/subscribeSave`, obj)
}
// 组合订单更换固定时间查询日期
export function updateRegularDateDateList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateRegularDateDateList`, obj)
}
// 组合订单更换固定时间查询技师
export function updateRegularDateTechList(obj) {
  return instance.post(`/apiservice/a/service/order/combination/updateRegularDateTechList`, obj)
}
// 订单跟踪表格数据获取
export function orderFlowListData(obj, pageNumber, pageSize) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/service/order/orderFlow/listData?pageNo=${pageNumber}&pageSize=${pageSize}`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}
//修改订单备注保存   
export function saveOrderRemark(obj) {
  return instance.post(`/apiservice/a/service/order/orderInfo/saveOrderRemark`, obj)
}

//机构，客户查询服务站
export function findStationByOrgIdAndCus(obj){
  return instance.post(`/apiservice/a/service/station/serviceStation/findStationByOrgIdAndCus`, obj)
}
