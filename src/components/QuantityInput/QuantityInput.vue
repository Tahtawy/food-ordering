<template>
  <div class="quantity-input d-flex">
    <button class="quantity-input__minus btn" @click="decrement">
      <i class="fas fa-minus"></i>
    </button>
    <input
      class="quantity-input__text-input text-center mx-1"
      type="text"
      v-model="quantityData"
      readonly
    />
    <button class="quantity-input__plus btn" @click="increment">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
// Services
import UserOrderService from "@/services/UserOrderService";

export default {
  // Options / Misc
  name: "QuantityInput",

  // Options / Data
  data() {
    return {
      quantityData: this.quantityProp
    };
  },
  props: {
    quantityProp: Number,
    itemId: Number
  },
  computed: {},
  methods: {
    async decrement() {
      const response = await UserOrderService.DecrementQuantity(this.itemId);
      if (response.status === 204) {
        this.quantityData -= 1;
      }
    },
    async increment() {
      const response = await UserOrderService.IncrementQuantity(this.itemId);
      if (response.status === 201) {
        this.quantityData += 1;
      }
    }
  },
  watch: {},

  // Options / Lifecycle Hooks
  beforeCreate() {},
  created() {},
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
  components: {},

  // Options / Composition
  mixins: {},
  extends: {}
};
</script>

<style lang="scss" scoped>
@import "./QuantityInput.scss";
</style>
