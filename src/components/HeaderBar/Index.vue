<template>
  <div class="header-bar">
    <div class="navigation-bar">
       <b-navbar toggleable="lg">
    <b-navbar-brand href="#">
      <router-link to="/home">
      <h1 class="font-fortnite text-light" to="/">FORTNITE</h1>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item >
          <!-- <h3 class="font-fortnite text-light zoom mr-2"> Inicio</h3> -->
          <router-link to="/">
            <h3 class="font-fortnite text-light zoom mr-2"> Inicio</h3>
          </router-link>
        </b-nav-item>
        <b-nav-item class="font-fortnite text-light">
          <h3 class="font-fortnite text-light zoom mr-2 ml-lg-2 ml-0" @click="goToStore"> Noticias</h3>
        </b-nav-item>
        <b-nav-item class="font-fortnite text-light">
          <h3 class="font-fortnite text-light zoom mr-2" @click="goToStore"> Tienda</h3>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto d-none d-lg-block ">
        <b-nav-form @submit.prevent="onSubmit">
          <b-form-input v-focus size="sm" v-model="form.epicId" class="mr-sm-2" placeholder="Usuario"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" variant="outline-light" type="submit">Buscar</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HeaderBar',
  data () {
    return {
      form: {
        epicId: null,
        region: 'br'
      }
    }
  },
  methods: {
    goToStore () {
      this.$router.push('/store')
    },
    onSubmit () {
      const { region, epicId } = this.form
      this.$router.push({ name: 'Profile', params: { region, epicId: epicId.replace('#', '-') } })
    }
  }
}
</script>
