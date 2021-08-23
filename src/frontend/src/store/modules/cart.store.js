import misc from "../../static/misc.json";
import { prepareAdditionals } from "../../common/helpers";

export default {
  namespaced: true,

  state: () => ({
    pizzas: [],
    additional: [],
    delivery: {
      type: "pickup",
      phone: "",
      street: "",
      house: "",
      flat: "",
    },
  }),

  getters: {
    isCartEmpty: (state) => {
      return state.pizzas.length === 0;
    },

    getTotalPrice: (state) => {
      const additionalPrice = state.additional.reduce(
        (sum, { price, quantity }) => {
          return sum + price * quantity;
        },
        0
      );

      const pizzasPrice = state.pizzas.reduce((sum, { price, quantity }) => {
        return sum + price * quantity;
      }, 0);

      return additionalPrice + pizzasPrice;
    },
  },

  actions: {
    initData({ commit }) {
      const additionals = prepareAdditionals(misc);

      additionals.forEach((el) => {
        commit("setAdditionalsIngredient", el);
      });
    },
  },

  mutations: {
    setDeliveryParam(state, { param, value }) {
      state.delivery[param] = value;
    },

    resetCart(state) {
      state.pizzas = [];
      state.delivery = {
        type: "pickup",
        phone: "",
        street: "",
        house: "",
        flat: "",
      };
      state.additional = state.additional.map((el) => (el.quantity = 0));
    },

    setAdditionalsIngredient(state, el) {
      console.log(el);
      state.additional.push(el);
    },

    updatePizzasAndAdditionals(state, { name, type, path }) {
      const index = state[path].findIndex((el) => el.name === name);

      if (~index) {
        const item = { ...state[path][index] };

        switch (type) {
          case "add":
            item.quantity = item.quantity + 1;
            break;
          case "del":
            item.quantity = item.quantity - 1;
            break;
        }

        state[path].splice(index, 1, item);
      }
    },
  },
};
