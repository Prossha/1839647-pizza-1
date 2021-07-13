<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :class="{ 'counter__button--disabled': quantity <= 0 }"
      :disabled="test <= 0"
      @click="event('del')"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="test"
      readonly
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--disabled': quantity >= maxCount }"
      :disabled="test >= maxCount"
      @click="event('add')"
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

  computed: {
    test() {
      return this.ingredient?.quantity ?? 0;
    },
  },

  methods: {
    event(mode) {
      this.$emit("selectIngredients", {
        mode: mode,
        name: this.ingredient.name,
        price: this.ingredient.price,
        quantity: this.ingredient.quantity,
      });
    },
  },
};
</script>
