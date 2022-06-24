import axios from 'axios'
async function getShop () {
  const params = {
    language: 'es'
  }
  const headers = {
    Authorization: process.env.VUE_APP_API_KEY
  }
  return await axios.get(`${process.env.VUE_APP_URL}/shop/br`, { params, headers })
}

export {
  getShop
}
