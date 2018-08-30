import { loginByUsername,logout, getUserInfo, getArea } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import store from '../../store'
const user = {
  state: {
    token: getToken(),
    name: '',
    area: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },  
    SET_AREA: (state, area) => {
      state.area = area
    }
  },

  actions: {
    // 登录
    // LoginByUsername({ commit }, userInfo) {
    //   return new Promise((resolve, reject) => {
    //     var obj = {
    //       username: userInfo.username,
    //       password: userInfo.password
    //     }
    //     loginByUsername(obj).then(response => {
    //       if (response.data.code === 1) {
    //         commit('SET_NAME', response.data.data.user.name)             
    //         if (response.data.data.user.name) {
    //           localStorage.setItem('name', response.data.data.user.name)
    //         }
    //         if (response.data.data.user.type) {
    //           localStorage.setItem('type', response.data.data.user.type)
    //         }
    //         if (response.data.data.user.id) {
    //           localStorage.setItem('userId', response.data.data.user.id)
    //         }
    //         //setToken(response.data.data.JSESSIONID)
    //         resolve(response)
    //       } else {
    //         resolve()
    //       }
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 获取用户信息
    // GetUserInfo({ commit, userInfo }) {
    //   if (JSON.parse(localStorage.getItem('menu'))) {
    //     commit('SET_NAME', localStorage.getItem('name'))
    //   } else {
    //     return new Promise((resolve, reject) => {
    //       getUserInfo().then(response => {
    //         const data = response.data
    //         commit('SET_NAME', localStorage.getItem('name'))
    //         resolve(response)
    //       }).catch(error => {
    //         reject(error)
    //       })
    //     })
    //   }
    // },
    // 获取省市区
    // Getarea({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     getArea().then(res => {
    //       const data = res.data
    //       commit('SET_AREA', data.data)
    //       resolve(res)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout().then(() => {
    //       store.state.app.visitedViews = []
    //       commit('SET_TOKEN', '')
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default user
