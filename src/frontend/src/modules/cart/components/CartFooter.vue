<template>
  <section class="footer">
    <div class="footer__more">
      <a @click="oneMorePizza" class="button button--border button--arrow">
        Хочу еще одну
      </a>
    </div>
    <p class="footer__text">
      Перейти к конструктору<br />чтоб собрать ещё одну пиццу
    </p>
    <div class="footer__price">
      <b>Итого: {{ getTotalPrice }} ₽</b>
    </div>

    <div class="footer__submit">
      <button @click="getOrder" type="submit" class="button">
        Оформить заказ
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CartFooter",

  computed: {
    ...mapGetters("Cart", ["getTotalPrice"]),
  },

  methods: {
    ...mapMutations("Builder", {
      resetPizza: "resetPizza",
    }),

    oneMorePizza() {
      this.resetPizza();
      this.$router.push("/");
    },

    getOrder() {
      this.resetPizza();
    },
  },
};
</script>
