<template>
  <form
    action="#"
    method="post"
    class="layout-form"
    @submit.prevent="createOrder"
  >
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <cart-empty v-if="isCartEmpty && !showSuccessModal" />

        <template v-else-if="!showSuccessModal">
          <cart-list />

          <cart-additional />

          <cart-form />

          <cart-footer></cart-footer>
        </template>
      </div>
    </main>

    <base-modal v-if="showSuccessModal">
      <cart-success />
    </base-modal>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import CartEmpty from "../modules/cart/components/CartEmpty.vue";
import CartFooter from "../modules/cart/components/CartFooter.vue";
import CartList from "../modules/cart/components/CartList.vue";
import CartAdditional from "../modules/cart/components/CartMore.vue";
import CartForm from "../modules/cart/components/CartForm.vue";

import BaseModal from "../common/components/BaseModal.vue";
import CartSuccess from "../modules/cart/components/CartSuccess.vue";

export default {
  name: "CartIndex",
  components: {
    BaseModal,
    CartEmpty,
    CartFooter,
    CartList,
    CartAdditional,
    CartForm,
    CartSuccess,
  },

  data() {
    return {
      showSuccessModal: false,
    };
  },

  computed: {
    ...mapGetters("Cart", ["isCartEmpty"]),
  },

  methods: {
    ...mapMutations("Cart", {
      resetCart: "resetCart",
    }),
    createOrder() {
      this.resetCart();
      this.showSuccessModal = true;
    },
  },
};
</script>
