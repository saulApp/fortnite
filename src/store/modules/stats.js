import * as stats from '@/api/stats'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    stat: {}
  },
  mutations: {
    SET_STAT (state, payload) {
      state.stat = payload
    }
  },
  actions: {
    async getUserStat ({ commit }, formData) {
      console.log('STORE')
      try {
        const response = await stats.getUserStat(formData)
        commit('SET_STAT', response.data.data)
      } catch (error) {
        const errObj = {
          routerParams: router.currentRoute.params,
          message: error.message
        }
        if (error.response) {
          errObj.data = error.response.data
          errObj.status = error.response.status
        }
        router.push({ name: 'Error' })
        commit('SET_STAT', null)
      }
    }
  }
}
