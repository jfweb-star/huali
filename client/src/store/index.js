import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numall: 0,
  },
  mutations: {
    add() {
      this.state.numall++
    },
    sub() {
      this.state.numall--
    },
    num() {
      let shopall = JSON.parse(window.localStorage.getItem('shopall'))
      let num = 0
      for (let i = 0; i < shopall.length; i++) {
        num += shopall[i].num
      }
      this.state.numall = num;
    }
  },
  actions: {},
  modules: {}
});