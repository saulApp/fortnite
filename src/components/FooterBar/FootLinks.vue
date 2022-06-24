<template>
  <div>
    <!-- TODO: CAMBIAR A COLOR BLANCO -->
    <b-nav small align="start" class="text-light">
      <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
      <b-nav-item :to="{name: 'About'}">About</b-nav-item>
      <b-nav-item href="https://github.com/baumannzone/diablo3-vue-platzi" target="_blank">Github</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>
