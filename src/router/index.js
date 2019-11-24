import Vue from "vue";
import VueRouter from "vue-router";

// Views
import UserOrders from "../views/UserOrders/UserOrders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "UserOrder" }
  },
  {
    name: "UserOrder",
    path: "/orders/122",
    component: UserOrders
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
