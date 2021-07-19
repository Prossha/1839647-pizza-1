<template>
  <component :is="activeLayout">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AppLayout",
  computed: {
    activeLayout() {
      return () => import(`@/layouts/${this.$route.meta.layout}.vue`);
    },
  },
};
</script>
