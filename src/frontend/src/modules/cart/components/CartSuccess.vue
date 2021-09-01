<template>
  <div class="popup">
    <router-link to="/" class="close">
      <span class="visually-hidden"></span>
    </router-link>
    <div class="popup__title">
      <h2 class="title">Спасибо за заказ</h2>
    </div>
    <p>Мы начали готовить Ваш заказ, скоро привезём его вам ;)</p>
    <div class="popup__button">
      <a @click="reset" class="button">Отлично, я жду!</a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CartSuccess",

  methods: {
    ...mapMutations("Builder", {
      resetPizza: "resetPizza",
    }),

    reset() {
      this.resetPizza();
      this.$router.push("/");
    },
  },
};
</script>
