<template>
<div>
 <div class="mt-5">
    <div class="d-flex">
      <h2 class="font-fortnite text-left mr-2 "> {{ shop.featured.name }}</h2>
    <b-icon class="mt-1" icon="clock" animation="spin" font-scale="2" style="color: #7be1f9;"></b-icon>
      <h2 class="font-fortnite text-left ml-2 " style="color: #7be1f9;">{{ date }}</h2>
  </div>
   <!-- // TODO PASAR A OTRO COMPONENTE -->
   <vue-horizontal responsive scroll :button="true" class="horizontal">
    <div v-for="item in featuredList" :key="item.devName" class="container-img">
      <div class="contenedor">
        <img :src="item.newDisplayAsset.materialInstances[0].images.Background" alt="">
        <div class="centrado">
            <!-- <div class="line-color"/> -->
          <div class="item-content">
          <h3 class=" mb-0 font-fortnite">{{item.items[0].name}}</h3>
          <p class="mb-0" style="color: #c1baba">{{ item.items[0].description}}</p>
          </div>
          <div class="buckets">
            <div class="d-flex bucket" >
            <img :src="shop.vbuckIcon" alt="vbuckIcon" style="width: 30px;">
            <h6 class="mb-0 my-auto">{{ item.regularPrice}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
      <template v-slot:btn-prev>
      <div style="font-size: 4rem;" class="d-none d-sm-block">
      <b-icon icon="arrow-left" class="rounded-circle store-icon pl-2" variant="light"></b-icon>
      </div>
    </template>

    <template v-slot:btn-next>
      <div style="font-size: 4rem;" class="d-none d-sm-block">
      <b-icon icon="arrow-right" class="rounded-circle store-icon pr-2" variant="light"></b-icon>
      </div>
    </template>
  </vue-horizontal>
 </div>
 <!-- NUEVO -->
 <div class="mt-5">
    <div class="d-flex">
      <h2 class="font-fortnite text-left mr-2 "> {{ shop.daily.name }}</h2>
    <!-- <b-icon class="mt-1" icon="clock" animation="spin" font-scale="2" style="color: #7be1f9;"></b-icon>
      <h2 class="font-fortnite text-left ml-2 " style="color: #7be1f9;">{{ date }}</h2> -->
  </div>
   <!-- // TODO PASAR A OTRO COMPONENTE -->
   <vue-horizontal responsive scroll :button="true" class="horizontal">
    <div v-for="item in dailyList" :key="item.devName" class="container-img">
      <div class="contenedor">
        <img :src="item.newDisplayAsset && item.newDisplayAsset.materialInstances !== null ? item.newDisplayAsset.materialInstances[0].images.Background : item.items[0].images.featured" alt="">
        <div class="centrado">
            <!-- <div class="line-color"/> -->
          <div class="item-content">
          <h3 class=" mb-0 font-fortnite">{{item.items[0].name}}</h3>
          <p class="mb-0" style="color: #c1baba">{{ item.items[0].description}}</p>
          </div>
          <div class="buckets">
            <div class="d-flex bucket" >
            <img :src="shop.vbuckIcon" alt="vbuckIcon" style="width: 30px;">
            <h6 class="mb-0 my-auto">{{ item.regularPrice}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
      <template v-slot:btn-prev>
      <div style="font-size: 4rem;" class="d-none d-sm-block">
      <b-icon icon="arrow-left" class="rounded-circle store-icon pl-2" variant="light"></b-icon>
      </div>
    </template>

    <template v-slot:btn-next>
      <div style="font-size: 4rem;" class="d-none d-sm-block">
      <b-icon icon="arrow-right" class="rounded-circle store-icon pr-2" variant="light"></b-icon>
      </div>
    </template>
  </vue-horizontal>
 </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
export default {
  data () {
    return {
      entries: []
    }
  },
  async created () {
    await this.getShop()
    this.entries = this.shop.featured.entries
  },
  computed: {
    ...mapState('shop', {
      shop: 'shop'
    }),
    featuredList () {
      let obj = null
      console.log('a', this.shop)
      // console.log('this.items?.featured?.entries', this.shop?.featured?.entries)
      if (this.shop.featured.entries !== null) {
        obj = this.shop.featured.entries
      }
      console.log('obj 1', obj)
      return obj
    },
    dailyList () {
      let obj = null
      console.log('a', this.shop)
      // console.log('this.items?.featured?.entries', this.shop?.featured?.entries)
      if (this.shop.daily.entries !== null) {
        obj = this.shop.daily.entries
      }
      console.log('obj 1', obj)
      return obj
    },
    date () {
      const now = moment(new Date())
      const duration = moment.duration(now.diff(this.shop.date))
      return duration.humanize()
    }
  },
  methods: {
    ...mapActions({
      getShop: 'shop/getShop'
    })
  }
}
</script>

<style scoped>
section {
  background: #f3f3f3;
}
.container-img {
  width: 370px !important;
}
img {
  width: 100%;
}
.item-content {
  text-align: center;
  backdrop-filter: blur(2px);
  background: #8080805e;
}
.buckets {
  background: #000724;
  text-align: center;
}
.bucket {
  justify-content: center;
  padding: 3px;
}
.store-icon {
    color: #0063e1!important;
    background: #89f0ff!important;
    border: 6px solid #0063e1;
}
.contenedor{
    position: relative;
    display: inline-block;
    text-align: center;
}
.texto-encima{
    position: absolute;
    top: 10px;
    left: 10px;
}
.centrado{
    position: absolute;
    width: 100%;
    top: 88%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.line-color {
    border-top: 8px solid transparent;
    border-right: 200px solid blue;
}
.horizontal >>> .v-hl-container {
  /* Space between content and scrollbar */
  padding-bottom: 16px;
  cursor: pointer;
  /* For firefox only */
  scrollbar-width: thin;
  scrollbar-color: #0596fc #0a2d9d;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar {
  height: 5px;
  width: 0px;
  background: transparent;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-track {
  background: #0a2d9d;
  border-radius: 4px;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 0px;
  border:0px #0a2d9d solid;
  background: #0596fc;
  cursor: pointer;
}
</style>
