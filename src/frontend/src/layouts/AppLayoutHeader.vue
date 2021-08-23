<template>
  <header class="header">
    <BaseLogo></BaseLogo>
    <div class="header__cart">
      <router-link to="/cart"> {{ totalPrice }}₽</router-link>
    </div>
    <div class="header__user">
      <router-link to="/login" class="header__login">
        <span> Войти </span>
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppLayoutHeader",

  computed: {
    ...mapGetters("Cart", ["getTotalPrice"]),

    totalPrice() {
      return Number.isInteger(this.getTotalPrice) ? this.getTotalPrice : 0;
    },
  },
};
</script>
