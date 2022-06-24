<template>
  <div id="app" class="background">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>
    <MainLayout v-else />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import BaseLoading from './components/BaseLoading.vue'
import MainLayout from './layouts/MainLayout.vue'
import LoadLayout from './layouts/LoadLayout.vue'

export default {
  name: 'App',
  components: {
    BaseLoading,
    MainLayout,
    LoadLayout
  },
  created () {
    console.log('CREATE')
    this.getNews()
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  },
  methods: {
    ...mapActions({
      getNews: 'news/getNews'
    })
  }
}
</script>
<style lang="stylus">
#app {
  padding: 20px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff; // Le ponemos un color de letra blanco para que resalte
  background-color: #15202b; // Le cambiamos el color de fondo por un azul marino oscuro
}
</style>
