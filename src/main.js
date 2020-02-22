import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import "@/styles/app.scss"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
