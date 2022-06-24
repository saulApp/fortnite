<template>
  <div class="home-title text-center">
    <b-img :src="news.image" fluid alt="Responsive image"></b-img>
    <div class="mt-5 pt-5 d-flex">
      <h2 class="font-fortnite text-left mr-2 ">Novedades</h2>
    <b-icon class="mt-1" icon="clock" animation="spin" font-scale="2"></b-icon>
      <h2 class="font-fortnite text-left ml-2 ">{{ date }}</h2>
  </div>
    <hr style="border-top: 5px solid white">
    <div>
      <b-row >
      <b-col md="12" lg="6" v-for="item in news.motds" :key="item.id">
      <b-card
      shadow
      overlay
      class="text-left font-fortnite mt-4 text-light"
      :img-src="item.tileImage"
      img-alt="Card Image"
      text-variant="white"
      bg-variant="transparent"
      :title="item.title"
      :sub-title="item.tabTitle"
      sub-title-text-variant="white"
      title-tag="h3"
      sub-title-tag="h5"
      footer-bg-variant="dark"
    >
      <template #footer bg-variant="dark">
        <h4>{{ item.body }}</h4>
      </template>
    </b-card>
      </b-col>
  </b-row>
    <!-- <b-card
      overlay
      :img-src="item.tileImage"
      img-alt="Card Image"
      text-variant="white"
      :title="item.title"
      :sub-title="item.tabTitle"
    >
      <b-card-text>
        {{ item.body }}
      </b-card-text>
    </b-card> -->
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
export default {
  name: 'HomeTitle',
  data () {
    return {
      bars: ['fab', 'vuejs']
    }
  },
  created () {
    console.log('news', this.news)
  },
  computed: {
    ...mapState('news', {
      news: 'news'
    }),
    date () {
      return moment(this.news.date).format('DD-MM-YYYY')
    }
  }
}
</script>
