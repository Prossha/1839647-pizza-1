<template>
  <div class="content__ingridients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингридиенты</h2>

      <div class="sheet__content ingridients">
        <BuilderSauceSelector />

        <div class="ingridients__filling">
          <p>Начинка:</p>

          <ul class="ingridients__list">
            <li
              class="ingridients__item"
              v-for="(item, index) in pizza.ingredients"
              :key="index"
            >
              <BaseDrag :transfer-data="item" :draggable="item.quantity < 3">
                <span class="filling" :class="`filling--${item.alias}`">
                  {{ item.name }}
                </span>
              </BaseDrag>

              <BaseItemCounter
                :ingredient="item"
                @selectIngredients="editIngredient($event)"
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
import { mapMutations, mapState } from "vuex";
import BuilderSauceSelector from "./BuilderSauceSelector";
import BaseItemCounter from "../../common/components/BaseItemCounter";
import BaseDrag from "../../common/components/BaseDrag";

export default {
  name: "BuilderIngredientsSelector",

  components: {
    BuilderSauceSelector,
    BaseItemCounter,
    BaseDrag,
  },

  computed: {
    ...mapState("Builder", {
      pizza: "pizza",
    }),
  },

  methods: {
    ...mapMutations("Builder", {
      updatePizzaIngredient: "updatePizzaIngredient",
    }),

    editIngredient(ingredient) {
      this.updatePizzaIngredient({
        name: ingredient.name,
        type: ingredient.mode,
      });
    },
  },
};
</script>
