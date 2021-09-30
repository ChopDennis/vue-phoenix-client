import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
let ls = new SecureLS({
  isCompression: false
})
Vue.use(Vuex)

const API_BASE_URL = process.env.VUE_APP_STRAPI_BASE_URL

const callAPI = function(apiUrl, payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${API_BASE_URL}${apiUrl}`, payload)
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })
}

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      },
      path: ['auth'],
      fetchBeforeUse: true
    })
  ],
  state: {
    loginAuth: {
      jwt: '',
      user: {}
    },
    resetPassword: {
      request: false,
      response: false
    }
  },
  getters: {
    _getAuthJWT: state => {
      return state.loginAuth.jwt
    },
    _getAuthUser: state => {
      return state.loginAuth.user
    }
  },
  mutations: {
    SET_LOGIN_AUTH(state, login) {
      state.loginAuth = login
    },
    RESET_LOGIN_AUTH(state) {
      state.loginAuth.jwt = ''
      state.loginAuth.user = {}
    }
  },
  actions: {
    async a_loginAuth({ commit }, login) {
      const res = await callAPI('/auth/local', login)
      commit('SET_LOGIN_AUTH', res)
      router.push({ name: 'Home' })
    },
    async a_registerAuth({ commit }, register) {
      const res = await callAPI('/auth/local/register', register)
      commit('SET_LOGIN_AUTH', res)
    },
    async a_forgotPassword({ commit }, email) {
      const payload = {
        email: email,
        url: '/api/admin/plugins/users-permissions/auth/reset-password'
      }
      const res = await callAPI('/auth/forgot-password', payload)
      return res.ok
    },
    async a_resetPassword({ commit }, reset) {
      const res = await callAPI('/auth/reset-password', reset)
      commit('SET_LOGIN_AUTH', res)
      return true
    },
    a_providerGoogle() {}
  }
})
