<template>
  <div class="home">
    <HomeBanner/>
    <HomeTitle/>
    <MainForm/>
  </div>
</template>

<script>
import HomeTitle from './HomeTitle'
import MainForm from './HomeForm'
import HomeBanner from './HomeBanner.vue'
export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm,
    HomeBanner
  }
}
</script>
