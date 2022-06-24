<template>
  <div>
    <div class="header pb-0 mb-0">
      <h5 class="px-2 py-1 mb-0 font-fortnite">{{ title }}</h5>
    </div>
    <div class="body px-2">
      <slot name="contain"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: null }
  }
}
</script>

<style scoped>
.header {
  background: #4b6189
}
.body {
  background: #27395d;
}
</style>
