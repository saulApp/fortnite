import axios from 'axios'

function getNews () {
  const params = {
    language: 'es'
  }
  const headers = {
    Authorization: process.env.VUE_APP_API_KEY
  }
  return axios.get(`${process.env.VUE_APP_URL}/news/br`, { params, headers })
}

export {
  getNews
}
