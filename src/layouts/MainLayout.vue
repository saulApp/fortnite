<template>
  <div>
    <div class='container'>
      <HeaderBar />
      <router-view />
      <FooterBar />
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'
export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style>
</style>
