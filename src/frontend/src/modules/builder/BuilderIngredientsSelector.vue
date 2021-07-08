<template>
  <div class="content__ingridients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <div class="sheet__content ingridients">
        <BuilderSauceSelector
          @change="$emit('change', $event)"
          :sauces="sauces"
        />

        <div class="ingridients__filling">
          <p>Начинка:</p>

          <ul class="ingridients__list">
            <li
              class="ingridients__item"
              v-for="(item, index) in ingredients"
              :key="index"
            >
              <span class="filling" :class="`filling--${item.alias}`">
                {{ item.name }}
              </span>

              <BaseItemCounter
                :ingredient="item"
                @setQuantity="setQuantity"
                class="ingridients__counter"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuilderSauceSelector from "./BuilderSauceSelector";
import BaseItemCounter from "../../common/components/BaseItemCounter";
import { findIngredientsName, findSauces } from "../../common/helpers";

export default {
  name: "BuilderIngredientsSelector",

  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },

  components: {
    BuilderSauceSelector,
    BaseItemCounter,
  },

  data() {
    return {
      ingredients: this.pizza.ingredients.map((item) =>
        findIngredientsName(item)
      ),
      ingredientsCopy: this.pizza.ingredients.map((item) =>
        findIngredientsName(item)
      ),
      sauces: this.pizza.sauces.map((item) => findSauces(item)),
    };
  },

  methods: {
    setQuantity(event) {
      const ingredient = this.ingredientsCopy.find(
        (item) => item.name === event.name
      );

      ingredient.quantity = event.quantity;

      event.mode === "add"
        ? (ingredient.price = event.price * ingredient.quantity)
        : (ingredient.price = ingredient.price - event.price);

      const selectIngredients = this.ingredientsCopy.filter(
        (item) => item.quantity > 0
      );

      this.$emit("selectIngredients", selectIngredients);
    },
  },
};
</script>
