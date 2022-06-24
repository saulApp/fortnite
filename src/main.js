// Paquetes de npm
import Vue from 'vue'
// BootstrapVue
import './plugins/BootstrapVue'

// Horizontal Scroll
import VueHorizontal from 'vue-horizontal'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Custom directives
import './directives'

// Archivos locales de nuestra App
import App from './App.vue'
import router from './router'
import store from './store'

// Traer el css
import './assets/css/main.styl'

Vue.config.productionTip = false
Vue.use(VueHorizontal)

new Vue({
  router,
  store,
  methods: {
    async init () {
      console.log('Hola 😍')
      await store.dispatch('aes/getAes', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
