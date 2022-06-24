import axios from 'axios'

function getAes () {
  const headers = {
    Authorization: process.env.VUE_APP_API_KEY
  }
  const response = axios.get(`${process.env.VUE_APP_URL}/aes`, { headers })
  return response
}
export {
  getAes
}
