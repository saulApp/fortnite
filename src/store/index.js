import Vue from 'vue'
import Vuex from 'vuex'

import aes from './modules/aes'
import loading from './modules/loading'
import news from './modules/news'
import shop from './modules/shop'
import stats from './modules/stats'
import error from './modules/error'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    aes,
    loading,
    news,
    shop,
    stats,
    error
  }
})
