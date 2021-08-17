import Vue from "vue";
import Vuex from "vuex";

import modules from "../store/modules";

Vue.use(Vuex);

const state = () => ({});

const actions = {
  async init({ dispatch }) {
    dispatch("Builder/initData");
  },
};

const mutations = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
});
