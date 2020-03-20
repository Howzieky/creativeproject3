import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock-data.js";

let data = {
  companies: mock,
  selectedCompany: 0
}

Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
