import * as shop from '@/api/shop'

export default {
  namespaced: true,
  state: {
    shop: {
      featured: {
        entries: []
      },
      daily: {
        entries: []
      }
    }
  },
  mutations: {
    SET_SHOP (state, payload) {
      state.shop = payload
    }
  },
  actions: {
    async getShop ({ commit }) {
      try {
        const response = await shop.getShop()
        console.log('RESPONSE', response.data.data)
        commit('SET_SHOP', response.data.data)
      } catch (error) {
        commit('SET_SHOP', null)
      }
      // shop.getShop()
      //   .then(({ data }) => {
      //     commit('SET_SHOP', data.data)
      //   })
      //   .catch((err) => {
      //     commit('SET_SHOP', null)
      //     console.log('ERROR', err)
      //   })
      //   .finally(() => {
      //     console.log('Se cargaron los items de la tienda')
      //   })
    }
  }
}
