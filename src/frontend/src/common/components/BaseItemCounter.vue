<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :class="{ 'counter__button--disabled': quantity <= 0 }"
      :disabled="quantity <= 0"
      @click="delItem"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="quantity"
      readonly
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--disabled': quantity >= maxCount }"
      :disabled="quantity >= maxCount"
      @click="addItem"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseItemCounter",

  props: {
    ingredient: {
      type: Object,
      required: false,
    },
    maxCount: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      quantity: 0,
    };
  },

  methods: {
    addItem() {
      this.quantity++;
      this.event("add");
    },

    delItem() {
      this.quantity--;
      this.event("del");
    },

    event(mode) {
      this.$emit("setQuantity", {
        mode: mode,
        name: this.ingredient.name,
        price: this.ingredient.price,
        quantity: this.quantity,
      });
    },
  },
};
</script>
