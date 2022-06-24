<template>
  <div class="grid-container">
    <!-- izquierda -->
    <div class="grid-item item-left">
      <!-- Top name -->
      <b-container class="bv-example-row">
        <StatsCard title="Stadística">
          <template slot="contain" >
            <div class="py-2">
              <b-row>
                <b-col class="text-center" cols="12"  xs="4" sm="5">
                  <img :src="profileData.image || require('../../../assets/img/default.jpg')" alt="imagen del jugador" width="150">
                </b-col>
                <b-col class="text-start" cols="12"  xs="4" sm="7">
                  <div class="px-2">
                    <h6>Jugador: {{ profileData.account.name}}</h6>
                    <h6>Últimas estadísticas registradas</h6>
                    <p>{{ lastModified }}</p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </template>
        </StatsCard>
        <StatsCard class="mt-3" title='Pase de batalla'>
          <template slot="contain" >
                <div class="d-flex py-2">
                  <img src="../../../assets/img/bp.png" alt="" width="90">
                  <div style="width:100%" class="ml-2 my-auto">
                  <h3 class="font-fortnite text-light">
                    LVL. {{ profileData.battlePass.level}}
                  </h3>
                    <b-progress :value="profileData.battlePass.progress" max="100" class="mb-3" variant="warning" striped animated></b-progress>
                  </div>
                </div>
          </template>
        </StatsCard>
      </b-container>
    </div>
    <!-- derecha -->
    <div class="grid-item item-right">
      <score :score="profileData.stats" />
    </div>
  </div>
</template>

<script>
import score from './score.vue'
import StatsCard from '@/components/BasicComponents/StatsCard.vue'
import moment from 'moment'
export default {
  name: 'MainBlock',
  components: { StatsCard, score },
  props: {
    profileData: {
      type: Object,
      required: true
    }
  },
  created () {
    console.log('creado', this.profileData)
  },
  computed: {
    lastModified () {
      return moment(this.profileData.stats.all.duo.lastModified).format('DD-MM-YYYY HH:mm')
    }
  }
}
</script>

<style lang="stylus">
  .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 2

        &.item-right
          grid-column span 4
</style>
