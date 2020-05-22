import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user'))
  },
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
