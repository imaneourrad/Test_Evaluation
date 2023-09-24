import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Navbar from './components/NavBar.vue'
import AllUsers from '@/components/AllUsers.vue';

Vue.config.productionTip = false
Vue.component('NavBar', Navbar)
Vue.component('AllUsers', AllUsers)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
