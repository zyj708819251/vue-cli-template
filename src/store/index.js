import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js' 
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    setuser : function(state,user){
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
