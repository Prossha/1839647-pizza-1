<template>
  <div id="app">
    <div class="main">
      <mainPage></mainPage>
    </div>
  </div>
</template>

<script>
import mainPage from "./views/Idnex";
export default {
  name: "App",

  components: {
    mainPage,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
