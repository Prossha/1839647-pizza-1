<template>
  <ul class="cart-list sheet">
    <cart-pizza-view v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import CartPizzaView from "./CartPizzaView";

export default {
  name: "CartList",

  components: {
    CartPizzaView,
  },
  computed: {
    ...mapState("Cart", ["pizzas"]),
  },
};
</script>
