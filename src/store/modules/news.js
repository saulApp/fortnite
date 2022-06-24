import * as news from '@/api/news'

export default {
  namespaced: true,
  state: {
    news: []
  },
  mutations: {
    SET_NEWS (state, payload) {
      state.news = payload
    }
  },
  actions: {
    getNews ({ commit }) {
      news.getNews()
        .then(({ data }) => {
          console.log(data)
          commit('SET_NEWS', data.data)
        })
        .catch((err) => {
          commit('SET_NEWS', null)
          console.log('ERROR', err)
        })
        .finally(() => {
          console.log('SE CARGARON LAS NOTICIAS ')
        })
    }
  }

}
