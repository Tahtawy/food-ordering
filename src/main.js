import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
