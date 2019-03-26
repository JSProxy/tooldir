import Vue from'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const types = {
  // 是否认证通过
  SET_IS_AUTNENTIATAEN: 'SET_IS_AUTNENTIATED',
  //设置用户信息
  SET_USER: 'SET_USER'
}
const state = {
  // 是否认证
  isAutnenticated: false,
  user: {} //用户信息
}

const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user: state => state.user
}

const mutations = {
  [types.SET_IS_AUTNENTIATAEN](state,isAutnenticated){
    if(isAutnenticated){
      state.isAutnenticated = isAutnenticated
    }else{
      state.isAutnenticated = false
    }
  },
  [types.SET_USER](state,user){
    if(user){
      state.user = user
    }else{
      state.user = {}
    }
  }
}

const actions = {
  setIsAutnenticated: ({ commit }, isAutnenticated) =>{

    commit(types.SET_IS_AUTNENTIATAEN,isAutnenticated)
  },
  setUser: ({ commit }, user) =>{

    commit(types.SET_USER,user)
  },
}

export default new Vuex.store({
  state,
  getters,
  mutations,
  actions
})