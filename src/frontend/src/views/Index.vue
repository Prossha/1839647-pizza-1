<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <BuilderDoughSelector
          @selectDough="selectDough = $event"
          :pizza="pizza"
        />

        <BuilderSizeSelector @selectSize="selectSize = $event" :pizza="pizza" />

        <BuilderIngredientsSelector
          @change="selectSauce = $event"
          @selectIngredients="setIngredient"
          :pizza="pizza"
          :ingredients="ingredients"
        />

        <BuilderPizzaView
          :selectIngredients="quantityIngredients"
          :pizzaComponents="pizzaComponents"
          @selectIngredients="setIngredient"
        />
      </div>
    </form>
  </main>
</template>

<script>
import misc from "../static/misc.json";
import pizza from "../static/pizza.json";
import user from "../static/user.json";

import BuilderDoughSelector from "../modules/builder/BuilderDoughSelector";
import BuilderSizeSelector from "../modules/builder/BuilderSizeSelector";
import BuilderIngredientsSelector from "../modules/builder/BuilderIngredientsSelector";
import BuilderPizzaView from "../modules/builder/BuilderPizzaView";
import { findIngredientsName } from "../common/helpers";

export default {
  name: "Index",

  data() {
    return {
      misc,
      pizza,
      user,
      selectDough: {},
      selectSize: {},
      selectSauce: {},
      selectIngredients: [],
      ingredients: pizza.ingredients.map((item) => findIngredientsName(item)),
    };
  },

  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
  },

  computed: {
    pizzaComponents() {
      return Object.assign([
        this.selectDough,
        this.selectSize,
        this.selectSauce,
      ]);
    },

    quantityIngredients() {
      return this.ingredients.filter((item) => item.quantity > 0);
    },
  },

  methods: {
    selectTestIngredients(quantity, index) {
      const ingredient = { ...this.ingredients[index], quantity };
      this.ingredients.splice(index, 1, ingredient);
    },
    setIngredient(ingredient) {
      const index = this.ingredients.findIndex(
        (el) => ingredient.name === el.name
      );
      const quantity =
        ingredient.mode === "add"
          ? ingredient.quantity + 1
          : ingredient.quantity - 1;
      this.selectTestIngredients(quantity, index);
    },
  },
};
</script>
