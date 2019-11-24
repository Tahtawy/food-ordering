import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Services
import UserOrderService from "@/services/UserOrderService";

export default new Vuex.Store({
  state: {
    restaurant_title: "",
    user_name: "",
    user_id: null,
    order_items: []
  },
  mutations: {
    SET_RESTAURANT_TITLE(state, restaurantTitle) {
      state.restaurant_title = restaurantTitle;
    },
    SET_USER_NAME(state, userName) {
      state.user_name = userName;
    },
    SET_USER_ID(state, userId) {
      state.user_id = userId;
    },
    SET_ORDERS_ITEMS(state, ordersItems) {
      state.order_items = ordersItems;
    }
  },
  actions: {
    async getUserOrders({ commit }, payload) {
      const response = await UserOrderService.GetUserOrder(payload.userId);
      const { restaurant, user, order_items } = response.data;

      commit("SET_RESTAURANT_TITLE", restaurant.title);
      commit("SET_USER_NAME", user.name);
      commit("SET_USER_ID", user.id);
      commit("SET_ORDERS_ITEMS", order_items);
    }
  },
  modules: {}
});
