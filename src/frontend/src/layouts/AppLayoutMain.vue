<template>
  <div>
    <app-layout-header />
    <main class="layout">
      <app-layout-sidebar />
      <div class="layout__content">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import AppLayoutHeader from "./AppLayoutHeader.vue";
import AppLayoutSidebar from "./AppLayoutSidebar.vue";
export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutHeader,
    AppLayoutSidebar,
  },
};
</script>
