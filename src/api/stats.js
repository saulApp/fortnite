import axios from 'axios'
async function getUserStat (formData) {
  console.table(formData)
  const { epicId, accountType, timeWindow, image } = formData
  const params = {
    name: epicId,
    accountType,
    timeWindow,
    image
  }
  const headers = {
    Authorization: process.env.VUE_APP_API_KEY
  }
  return await axios.get(`${process.env.VUE_APP_URL}/stats/br/v2`, { params, headers })
}

export {
  getUserStat
}
