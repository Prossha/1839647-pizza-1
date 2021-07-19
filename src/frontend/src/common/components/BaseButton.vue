<template>
  <button
    v-on="$listeners"
    :disabled="disabled"
    :type="type"
    class="button"
    :class="{ 'button--disabled': disabled }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>
