import Vue from 'vue';
import Vuex from 'vuex';
import map from './modules/map';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    map
  },
  getters
});

export default store;
