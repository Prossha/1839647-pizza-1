<template>
  <form action="#" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <cart-empty v-if="isCartEmpty" />

        <template v-else>
          <cart-list />

          <cart-additional />

          <cart-form />

          <cart-footer></cart-footer>
        </template>
      </div>
    </main>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

import CartEmpty from "../modules/cart/components/CartEmpty.vue";
import CartFooter from "../modules/cart/components/CartFooter.vue";
import CartList from "../modules/cart/components/CartList.vue";
import CartAdditional from "../modules/cart/components/CartMore.vue";
import CartForm from "../modules/cart/components/CartForm.vue";

export default {
  name: "CartIndex",
  components: {
    CartEmpty,
    CartFooter,
    CartList,
    CartAdditional,
    CartForm,
  },

  computed: {
    ...mapGetters("Cart", ["isCartEmpty"]),
  },
};
</script>
