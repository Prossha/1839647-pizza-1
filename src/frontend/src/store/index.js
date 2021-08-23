import Vue from "vue";
import Vuex from "vuex";

import modules from "../store/modules";

Vue.use(Vuex);

const state = () => ({});

const actions = {
  async init({ dispatch }) {
    dispatch("Builder/initData");
    dispatch("Cart/initData");
  },
};

const mutations = {
  addEntity(state, { module, entity, value }) {
    if (module) {
      state[module][entity] = [...state[module][entity], value];
    } else {
      state[entity] = [...state[entity], value];
    }
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules,
});
