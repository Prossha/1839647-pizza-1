import pizza from "../../static/pizza.json";
import {
  findDoughType,
  findIngredientsName,
  findSize,
  findSauces,
} from "../../common/helpers.js";

export default {
  namespaced: true,

  state: () => ({
    data: {},
    pizza: {
      dough: null,
      ingredients: [],
      name: "",
      sauce: null,
      size: null,
    },
  }),

  getters: {
    selectedIngredients: (state) => {
      return state.pizza.ingredients.filter((el) => el.quantity > 0);
    },

    pizzaPrice: (state) => {
      const { pizza } = state;

      if (!pizza.dough || !pizza.sauce || !pizza.size) return 0;

      const ingredientsPrice = pizza.ingredients.reduce(
        (sum, { price, quantity }) => {
          return sum + price * quantity;
        },
        0
      );

      return (
        (ingredientsPrice + pizza.dough.price + pizza.sauce.price) *
        pizza.size.multiplier
      );
    },

    pizzaDone: (state, getters) => {
      return !!getters.selectedIngredients.length && !!state.pizza.name;
    },
  },

  mutations: {
    setBuilderData(state, payload) {
      state.data = payload;
    },

    resetPizza(state) {
      state.pizza.dough = state.data.doughs?.[0] ?? null;
      state.pizza.size = state.data.sizes?.[0] ?? null;
      state.pizza.sauce = state.data.sauces?.[0] ?? null;
      state.pizza.ingredients = [...state.data.ingredients];
      state.pizza.name = "";
    },

    updateReadyPizza(state, { name, ingredients, sauce, size, dough }) {
      state.pizza.name = name;
      state.pizza.ingredients = ingredients;
      state.pizza.size = size;
      state.pizza.sauce = sauce;
      state.pizza.dough = dough;
    },

    updatePizzaIngredient(state, { name, type }) {
      const index = state.pizza.ingredients.findIndex((el) => el.name === name);

      if (~index) {
        const item = { ...state.pizza.ingredients[index] };

        switch (type) {
          case "add":
            item.quantity = item.quantity + 1;
            break;
          case "del":
            item.quantity = item.quantity - 1;
            break;
        }

        state.pizza.ingredients.splice(index, 1, item);
      }
    },

    setPizzaParam(state, { param, value }) {
      state.pizza[param] = value;
    },
  },

  actions: {
    initData({ commit }) {
      const data = {
        sauces: pizza.sauces.map((item) => findSauces(item)),
        sizes: pizza.sizes.map((item) => findSize(item)),
        doughs: pizza.dough.map((item) => findDoughType(item)),
        ingredients: pizza.ingredients.map((item) => findIngredientsName(item)),
      };
      commit("setBuilderData", data);
      commit("resetPizza");
    },

    addPizza({ state, getters, commit }) {
      commit(
        "addEntity",
        {
          module: "Cart",
          entity: "pizzas",
          value: {
            ...state.pizza,
            price: getters["pizzaPrice"],
            quantity: 1,
          },
        },
        { root: true }
      );
    },
  },
};
