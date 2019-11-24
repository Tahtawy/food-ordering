<template>
  <section class="user-orders">
    <page-title :restaurantTitle="restaurant_title" :userName="user_name"></page-title>
    <div class="user-orders__table">
      <table class="table">
        <thead>
          <th class="text-capitalize">order items</th>
          <th class="text-capitalize">price</th>
          <th class="text-capitalize">quantity</th>
        </thead>
        <tbody>
          <tr v-for="order in order_items" :key="order.id">
            <td>{{ order.name }}</td>
            <td>
              {{ order.price }}
              <span class="text-uppercase">{{ defaultCurrency }}</span>
            </td>
            <td>
              <quantity-input :quantityProp="order.quantity" :itemId="order.id" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
// Components
import PageTitle from "@/components/PageTitle/PageTitle.vue";
import QuantityInput from "@/components/QuantityInput/QuantityInput.vue";

// Vuex
import { mapActions, mapState } from "vuex";

export default {
  // Options / Misc
  name: "UserOrders",

  // Options / Data
  data() {
    return {
      defaultCurrency: "egp"
    };
  },
  props: {},
  computed: {
    ...mapState({
      restaurant_title: state => state.restaurant_title,
      user_name: state => state.user_name,
      user_id: state => state.user_id,
      order_items: state => state.order_items
    })
  },
  methods: {
    ...mapActions(["getUserOrders"])
  },
  watch: {},

  // Options / Lifecycle Hooks
  beforeCreate() {},
  created() {
    this.getUserOrders({ userId: 122 });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  // errorCaptured: (err, vm, info) => {},

  // Options / Assets
  directives: {},
  filters: {},
  components: {
    PageTitle,
    QuantityInput
  },

  // Options / Composition
  mixins: {},
  extends: {}
};
</script>

<style lang="scss" scoped>
@import "./UserOrders.scss";
</style>
