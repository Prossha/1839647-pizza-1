<template>
  <div>
    <AppLayoutHeader />
    <IndexMain />
  </div>
</template>

<script>
import AppLayoutHeader from "./AppLayoutHeader.vue";
import IndexMain from "../views/Index.vue";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    IndexMain,
  },
};
</script>
