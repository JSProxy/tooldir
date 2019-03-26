import axios from 'axios'
import tool from '~/plugins/mytool'
export const state = () => {
  return {
    openLogin: false,
    webName: '阿西吧',
    disPatch: 'func',
    token: ''
  }
}
export const getters = {
  isopenLogin(state) {
    return !state.openLogin
  }
}
export const mutations = {
  updateLoginState(state) {
    state.openLogin = !state.openLogin
  },
  updateWebName(state, name) {
    state.webName = name
  },
  updateDisPatch(state, name) {
    state.disPatch = name
  },
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  LoginAction({ commit }) {
    commit('updateLoginState')
  },
  async disPatchAction({ commit }) {
    const { data } = await axios.get('https://api.myjson.com/bins/rhnw8')
    commit('updateDisPatch', '异步store' + data.fetchName)
    // await 1
    // commit('updateDisPatch', '异步store')
    tool('plugins-is-ok')
  },
  nuxtServerInit({ commit }, { req }) {
    const cookie = req.headers.cookie
    const token = cookieparse(cookie).token
    commit('setToken', token)
  }
}

function cookieparse(cookie) {
  return {
    token: 'tokenisok'
  }
}
