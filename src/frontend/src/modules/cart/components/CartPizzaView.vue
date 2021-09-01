<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="@/assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        :alt="pizza.name"
      />
      <div class="product__text">
        <h2>{{ pizza.name }}</h2>
        <ul>
          <li>{{ pizza.size.name }}, на {{ getDough }} тесте</li>
          <li>Соус: {{ pizza.sauce.name.toLowerCase() }}</li>
          <li>Начинка: {{ filledIngredients }}</li>
        </ul>
      </div>
    </div>

    <base-item-counter
      class="cart-list__counter"
      @selectIngredients="set($event)"
      :ingredient="pizza"
    />

    <div class="cart-list__price">
      <b>{{ getPizzaPrice }} ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit" @click="changePizza">
        Изменить
      </button>
    </div>
  </li>
</template>

<script>
import BaseItemCounter from "../../../common/components/BaseItemCounter.vue";
import { mapMutations } from "vuex";
export default {
  name: "CartPizzaView",
  components: {
    BaseItemCounter,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getDough() {
      return this.pizza.dough.size === "light" ? "тонком" : "толстом";
    },
    filledIngredients() {
      return this.pizza.ingredients
        .filter((el) => el.quantity > 0)
        .map((el) => el.name.toLowerCase())
        .join(", ");
    },
    getPizzaPrice() {
      return this.pizza.price * this.pizza.quantity;
    },
  },

  methods: {
    ...mapMutations("Cart", {
      updatePizzas: "updatePizzasAndAdditionals",
    }),

    ...mapMutations("Builder", {
      updateReadyPizza: "updateReadyPizza",
    }),

    set(ingredient) {
      this.updatePizzas({
        name: ingredient.name,
        type: ingredient.mode,
        path: "pizzas",
      });
    },
    changePizza() {
      this.updateReadyPizza(this.pizza);
      this.$router.push("/");
    },
  },
};
</script>
