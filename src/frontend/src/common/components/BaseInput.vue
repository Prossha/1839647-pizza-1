<template>
  <label class="input">
    <slot></slot>
    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      @input="set($event.target.value)"
    />
  </label>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "BaseInput",
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

  methods: {
    ...mapMutations("Builder", {
      setPizzaParam: "setPizzaParam",
    }),

    set(val) {
      this.setPizzaParam({ param: "name", value: val });
    },
  },
};
</script>
