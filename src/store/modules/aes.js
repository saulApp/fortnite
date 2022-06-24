import * as aes from '@/api/aes'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      // state: el estado de nuestro módulo
      // payload: valor que queremos guardar
      state.accessToken = payload
    }
  },
  actions: {
    getAes ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })
      aes.getAes()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.data.mainKey)
        })
        .catch((err) => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('ERROR', err)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
          console.log('DONE!')
        })
    }
  }
}
