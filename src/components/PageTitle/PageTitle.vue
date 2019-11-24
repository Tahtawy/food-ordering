<template>
  <section class="page-title">
    <h1>{{ restaurantTitle }}, by {{ userName }}</h1>
  </section>
</template>

<script>
export default {
  // Options / Misc
  name: "PageTitle",

  // Options / Data
  data() {
    return {};
  },
  props: {
    restaurantTitle: String,
    userName: String
  },
  computed: {},
  methods: {},
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
@import "./PageTitle.scss";
</style>
