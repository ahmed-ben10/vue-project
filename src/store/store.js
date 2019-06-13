import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      currentPage: ""
    },
    mutations: {
      changePage:(state,page) =>{
          state.currentPage = page;
      }
    }
  });