<template>
  <div class="container pt-3 pt-lg-0">
    <div>
  <b-tabs align="end" nav-class="header" active-nav-item-class="font-weight-bold text-uppercase text-dark">
    <b-tab v-if="solo" title="Solo" title-link-class="text-light">
    <b-list-group v-for="item in solo" :key="item.title">
  <b-list-group-item class="d-flex justify-content-between align-items-center body">
    <h6>{{ item.title}}</h6>
    <b-badge variant="dark" pill>{{ item.score}}</b-badge>
  </b-list-group-item>
</b-list-group>
    </b-tab>
    <b-tab  v-if="duo" title="Duo" title-link-class="text-light">
    <b-list-group v-for="item in duo" :key="item.title">
  <b-list-group-item class="d-flex justify-content-between align-items-center body">
    <h6>{{ item.title}}</h6>
    <b-badge variant="dark" pill>{{ item.score}}</b-badge>
  </b-list-group-item>
</b-list-group>
</b-tab>
    <b-tab  v-if="trio" title="Trio" title-link-class="text-light">
    <b-list-group v-for="item in trio" :key="item.title">
  <b-list-group-item class="d-flex justify-content-between align-items-center body">
    <h6>{{ item.title}}</h6>
    <b-badge variant="dark" pill>{{ item.score}}</b-badge>
  </b-list-group-item>
</b-list-group>
</b-tab>
    <b-tab  v-if="squad" title="Escuadron" title-link-class="text-light">
    <b-list-group v-for="item in squad" :key="item.title">
  <b-list-group-item class="d-flex justify-content-between align-items-center body">
    <h6>{{ item.title}}</h6>
    <b-badge variant="dark" pill>{{ item.score}}</b-badge>
  </b-list-group-item>
</b-list-group>
</b-tab>
  </b-tabs>
</div>
  </div>
</template>

<script>
export default {
  props: {
    score: { type: Object, require: true }
  },
  computed: {
    solo () {
      return this.score.all.solo ? [
        { title: 'Partidas', score: this.score.all.solo.matches },
        { title: 'Score', score: this.score.all.solo.score },
        { title: 'Ratio de victorias %', score: this.score.all.solo.winRate },
        { title: 'Muertes', score: this.score.all.solo.deaths },
        { title: 'Victorias', score: this.score.all.solo.wins },
        { title: 'Top 10', score: this.score.all.solo.top10 },
        { title: 'Top 25', score: this.score.all.solo.top25 },
        { title: 'Asesinatos', score: this.score.all.solo.kills },
        { title: 'Asesinatos por minuto', score: this.score.all.solo.killsPerMin },
        { title: 'Asesinatos por partida', score: this.score.all.solo.killsPerMatch },
        { title: 'Minutos jugados', score: this.score.all.solo.minutesPlayed },
        { title: 'Jugadores sobrevividos', score: this.score.all.solo.playersOutlived }
      ] : null
    },
    duo () {
      return this.score.all.duo ? [
        { title: 'Partidas', score: this.score.all.duo.matches },
        { title: 'Score', score: this.score.all.duo.score },
        { title: 'Ratio de victorias %', score: this.score.all.duo.winRate },
        { title: 'Muertes', score: this.score.all.duo.deaths },
        { title: 'Victorias', score: this.score.all.duo.wins },
        { title: 'Top 5', score: this.score.all.duo.top5 },
        { title: 'Top 12', score: this.score.all.duo.top12 },
        { title: 'Asesinatos', score: this.score.all.duo.kills },
        { title: 'Asesinatos por minuto', score: this.score.all.duo.killsPerMin },
        { title: 'Asesinatos por partida', score: this.score.all.duo.killsPerMatch },
        { title: 'Minutos jugados', score: this.score.all.duo.minutesPlayed },
        { title: 'Jugadores sobrevividos', score: this.score.all.duo.playersOutlived }
      ] : null
    },
    trio () {
      return this.score.all.trio ? [
        { title: 'Partidas', score: this.score.all.trio.matches },
        { title: 'Score', score: this.score.all.trio.score },
        { title: 'Ratio de victorias %', score: this.score.all.trio.winRate },
        { title: 'Muertes', score: this.score.all.trio.deaths },
        { title: 'Victorias', score: this.score.all.trio.wins },
        { title: 'Top 5', score: this.score.all.trio.top5 },
        { title: 'Top 12', score: this.score.all.trio.top12 },
        { title: 'Asesinatos', score: this.score.all.trio.kills },
        { title: 'Asesinatos por minuto', score: this.score.all.trio.killsPerMin },
        { title: 'Asesinatos por partida', score: this.score.all.trio.killsPerMatch },
        { title: 'Minutos jugados', score: this.score.all.trio.minutesPlayed },
        { title: 'Jugadores sobrevividos', score: this.score.all.trio.playersOutlived }
      ] : null
    },
    squad () {
      return this.score.all.squad ? [
        { title: 'Partidas', score: this.score.all.squad.matches },
        { title: 'Score', score: this.score.all.squad.score },
        { title: 'Ratio de victorias %', score: this.score.all.squad.winRate },
        { title: 'Muertes', score: this.score.all.squad.deaths },
        { title: 'Victorias', score: this.score.all.squad.wins },
        { title: 'Top 3', score: this.score.all.squad.top3 },
        { title: 'Top 6', score: this.score.all.squad.top6 },
        { title: 'Asesinatos', score: this.score.all.squad.kills },
        { title: 'Asesinatos por minuto', score: this.score.all.squad.killsPerMin },
        { title: 'Asesinatos por partida', score: this.score.all.squad.killsPerMatch },
        { title: 'Minutos jugados', score: this.score.all.squad.minutesPlayed },
        { title: 'Jugadores sobrevividos', score: this.score.all.squad.playersOutlived }
      ] : null
    }
  }
}
</script>

<style>
.card-body{
  padding: 0px !important
}
.header {
  background: #4b6189
}
.body {
  background: #27395d;
}
.active-nav {
  background: red;
  color: white;
}
</style>
