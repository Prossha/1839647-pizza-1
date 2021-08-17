import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseLogo from "./common/components/BaseLogo";

Vue.config.productionTip = false;
Vue.component("BaseLogo", BaseLogo);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
