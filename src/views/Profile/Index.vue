<template>
  <div >
    <BaseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
    <MainBlock :profile-data="profileData"></MainBlock>
    </template>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index.vue'
import setError from '@/mixins/setError'
import { getUserStat } from '@/api/stats'
export default {
  name: 'ProfileView',
  // Lo damos de alta
  mixins: [
    setError
  ],
  components: { BaseLoading, MainBlock },
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  async created () {
    this.isLoading = true
    const formData = this.$route.params
    await this.fetchData(formData)
  },
  methods: {
    fetchData (formData) {
      getUserStat(formData)
        .then(({ data }) => {
          this.profileData = data.data
          console.log(data)
        })
        .catch(err => {
          this.profileData = null
          const errObj = {
            routerParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
