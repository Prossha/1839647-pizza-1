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
              <BaseDrag :transfer-data="item" :draggable="item.quantity < 3">
                <span class="filling" :class="`filling--${item.alias}`">
                  {{ item.name }}
                </span>
              </BaseDrag>

              <BaseItemCounter
                :ingredient="item"
                @selectIngredients="$emit('selectIngredients', $event)"
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
import { findSauces } from "../../common/helpers";
import BaseDrag from "../../common/components/BaseDrag";

export default {
  name: "BuilderIngredientsSelector",

  props: {
    pizza: {
      type: Object,
      required: true,
    },
    ingredients: {
      required: true,
    },
  },

  components: {
    BuilderSauceSelector,
    BaseItemCounter,
    BaseDrag,
  },

  data() {
    return {
      sauces: this.pizza.sauces.map((item) => findSauces(item)),
    };
  },
};
</script>
