import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const url = "https://icanhazdadjoke.com"; 
const headers = { Accept: "application/json" };
export default new Vuex.Store({
  state: {
    joke : 'this is a joke',
    jokes : []
  },
  mutations: {
    setjoke(state, payload){
      state.joke = payload;
      state.jokes.push(payload)
    }
  },
  actions: {
    async setjoke(state){
      const jok = await fetch(url, {headers})
      const j = await jok.json()
      // console.log('jok :', j);
      state.commit('setjoke', j.joke)
    }
  },
  getters:{
    getjoke(state){
      return state.joke
    }
  }
})
