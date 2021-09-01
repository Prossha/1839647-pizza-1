<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <cart-additional-item
        v-for="item in additional"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import CartAdditionalItem from "../../../modules/cart/components/CartAdditionalItem.vue";
import { mapState } from "vuex";

export default {
  name: "CartList",

  components: {
    CartAdditionalItem,
  },
  computed: {
    ...mapState("Cart", ["additional"]),
  },
};
</script>
