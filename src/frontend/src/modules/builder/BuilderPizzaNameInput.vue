<template>
  <label class="input">
    <slot></slot>
    <input
      type="text"
      :name="name"
      :value="pizza.name"
      :placeholder="placeholder"
      :required="required"
      @input="$emit('setPizzaName', $event.target.value)"
    />
  </label>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BuilderPizzaNameInput",
  props: {
    name: {
      type: String,
      required: true,
      validator: (v) => v.length,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState("Builder", {
      pizza: "pizza",
    }),
  },
};
</script>
