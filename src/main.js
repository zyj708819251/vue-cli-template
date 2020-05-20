import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// composition-api
import CompositionApi from '@vue/composition-api'
// 引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入全局过滤器

import '@/utils/filter'
Vue.config.productionTip = false

Vue.use(CompositionApi)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(process.env.VUE_APP_URL)
