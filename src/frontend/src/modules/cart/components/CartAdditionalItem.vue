<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="item.image" width="39" height="60" />
      <span>{{ item.name }}</span>
    </p>

    <div class="additional-list__wrapper">
      <base-item-counter
        class="additional-list__counter"
        @selectIngredients="set($event)"
        :ingredient="item"
      />

      <div class="additional-list__price">
        <b>{{ item.price * item.quantity }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import BaseItemCounter from "../../../common/components/BaseItemCounter.vue";
import { mapMutations } from "vuex";

export default {
  name: "CartAdditionalItem",
  components: {
    BaseItemCounter,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapMutations("Cart", {
      updateAdditionalsIngredient: "updatePizzasAndAdditionals",
    }),

    set(ingredient) {
      this.updateAdditionalsIngredient({
        name: ingredient.name,
        type: ingredient.mode,
        path: "additional",
      });
    },
  },
};
</script>
