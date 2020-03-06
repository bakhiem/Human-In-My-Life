import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import "@/styles/app.scss"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
//Import Froala Editor 
import 'froala-editor/js/plugins.pkgd.min.js';
//Import third party plugins
import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
// Import Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'

Vue.use(VueFroala)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
