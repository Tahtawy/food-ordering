<template>
  <div id="app">
    <app-bar></app-bar>
    <router-view />
  </div>
</template>

<script>
// Components
import AppBar from "./components/layout/AppBar/AppBar.vue";

export default {
  // Options / Misc
  name: "App",

  // Options / Data
  data() {
    return {};
  },
  props: {},
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
  components: {
    AppBar
  },

  // Options / Composition
  mixins: {},
  extends: {}
};
</script>

<style lang="scss">
@import "./assets/scss/global.scss";
</style>
