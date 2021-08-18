<template>
  <div class="content__pizza">
    <BaseInput name="pizza_name" placeholder="Введите название пиццы">
      <span class="visually-hidden">Название пиццы</span>
    </BaseInput>

    <BaseDrop @drop="addIngredient">
      <div class="content__constructor">
        <div :class="`pizza pizza--foundation--${pizzaDough}-${pizzaSauce}`">
          <div class="pizza__wrapper" />
        </div>
      </div>
    </BaseDrop>

    <div class="content__result">
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <BaseButton :disabled="!pizzaDone">
        <router-link to="/cart"> Готовьте! </router-link>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../common/components/BaseInput";
import BaseButton from "../../common/components/BaseButton";
import { pizzaIngredientElementBlock } from "../../common/helpers";
import BaseDrop from "../../common/components/BaseDrop";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "BuilderPizzaView",

  components: {
    BaseInput,
    BaseButton,
    BaseDrop,
  },

  watch: {
    selectIngredients() {
      document.querySelector(".pizza__wrapper").innerHTML =
        this.selectIngredientsBlock;
    },
  },

  computed: {
    ...mapState("Builder", {
      pizza: "pizza",
    }),

    ...mapGetters("Builder", {
      pizzaPrice: "pizzaPrice",
      pizzaDone: "pizzaDone",
      selectIngredients: "selectedIngredients",
    }),

    pizzaSauce() {
      return this.pizza.sauce?.value ?? "tomato";
    },

    pizzaDough() {
      return this.pizza.dough?.style ?? "big";
    },

    pizzaSize() {
      return this.pizza.size?.multiplier ?? 1;
    },

    selectIngredientsBlock() {
      return this.selectIngredients.map((item) => {
        return pizzaIngredientElementBlock(item.alias);
      });
    },
  },

  methods: {
    ...mapMutations("Builder", {
      updatePizzaIngredient: "updatePizzaIngredient",
    }),

    addIngredient({ name }) {
      this.updatePizzaIngredient({
        name: name,
        type: "add",
      });
    },
  },
};
</script>
