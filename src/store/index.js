import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: 0,
    token: '',
		username:''
  },
  mutations: {
    changeSignState(state,n) {
      state.isSignIn = n
    },
    setToken(state,token) {
      state.token = token
    },
		setUser(state, username){
			state.username = username
		}

  },
  // actions: {
  //   setScreen()
  // }
});