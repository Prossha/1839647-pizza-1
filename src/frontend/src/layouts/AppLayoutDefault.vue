<template>
  <div>
    <app-layout-header />
    <main class="content">
      <slot />
    </main>
  </div>
</template>

<script>
import AppLayoutHeader from "./AppLayoutHeader.vue";
export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader,
  },
};
</script>
