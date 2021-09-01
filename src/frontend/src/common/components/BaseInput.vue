<template>
  <label class="input">
    <slot></slot>
    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      @input="$emit('inputData', $event.target.value)"
    />
  </label>
</template>

<script>
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
};
</script>
