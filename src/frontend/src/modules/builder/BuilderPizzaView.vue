<template>
  <div class="content__pizza">
    <BaseInput
      @input="pizzaName = $event"
      name="pizza_name"
      placeholder="Введите название пиццы"
    >
      <span class="visually-hidden">Название пиццы</span>
    </BaseInput>

    <BaseDrop @drop="chekItem">
      <div class="content__constructor">
        <div :class="`pizza pizza--foundation--${pizzaDough}-${pizzaSauce}`">
          <div class="pizza__wrapper" />
        </div>
      </div>
    </BaseDrop>

    <div class="content__result">
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <BaseButton :disabled="!buttonStatus"> Готовьте! </BaseButton>
    </div>
  </div>
</template>

<script>
import { INGREDIENTS_IDS } from "../../common/constants";
import BaseInput from "../../common/components/BaseInput";
import BaseButton from "../../common/components/BaseButton";
import { pizzaIngredientElementBlock } from "../../common/helpers";
import BaseDrop from "../../common/components/BaseDrop";

export default {
  name: "BuilderPizzaView",

  components: {
    BaseInput,
    BaseButton,
    BaseDrop,
  },

  data() {
    return {
      pizzaName: "",
      dropIngredients: [],
    };
  },

  props: {
    pizzaComponents: {
      type: Array,
      required: true,
    },
    selectIngredients: {
      type: Array,
      required: true,
    },
  },

  watch: {
    selectIngredients() {
      document.querySelector(".pizza__wrapper").innerHTML =
        this.selectIngredientsBlock;
    },
  },

  computed: {
    pizzaSauce() {
      return (
        this.pizzaComponents.find((item) => item.id === INGREDIENTS_IDS.sauces)
          ?.value ?? "tomato"
      );
    },

    pizzaDough() {
      return (
        this.pizzaComponents.find((item) => item.id === INGREDIENTS_IDS.dough)
          ?.style ?? "big"
      );
    },

    pizzaSize() {
      const size = this.pizzaComponents.find(
        (item) => item.id === INGREDIENTS_IDS.size
      );
      return size?.multiplier ?? 1;
    },

    pizzaComponentsPrice() {
      return this.pizzaComponents.reduce((acc, item) => {
        if (item.price) {
          return acc + item.price;
        }
        return acc;
      }, 0);
    },

    pizzaIngredientsPrice() {
      return this.selectIngredients.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },

    pizzaPrice() {
      return (
        (this.pizzaComponentsPrice + this.pizzaIngredientsPrice) *
        this.pizzaSize
      );
    },

    selectIngredientsBlock() {
      return this.selectIngredients.map((item) => {
        return pizzaIngredientElementBlock(item.alias);
      });
    },

    buttonStatus() {
      const dough = this.pizzaComponents.find(
        (item) => item.id === INGREDIENTS_IDS.dough
      );
      const sauces = this.pizzaComponents.find(
        (item) => item.id === INGREDIENTS_IDS.sauces
      );
      const size = this.pizzaComponents.find(
        (item) => item.id === INGREDIENTS_IDS.size
      );
      return this.pizzaName.length > 0 && dough && sauces && size;
    },
  },

  methods: {
    chekItem(item) {
      this.$emit("selectIngredients", {
        mode: "add",
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      });
    },
  },
};
</script>
