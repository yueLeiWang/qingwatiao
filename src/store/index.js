import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const state = {
  pjtnews: 0,
  role:'prosone',
  count: 1,
  userInf:{}
}
 
const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  },
  //存储用户信息
  saveuser(state){
    state.userInf = JSON.parse(localStorage.getItem("userinf"))
  }
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // }, 
}
// const actions = {
//   commit('SET_TOKEN', localStorage.getItem('name'))
// }
export default new Vuex.Store({
  state,
  mutations,
  // actions
});
