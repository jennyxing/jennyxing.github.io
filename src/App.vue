<template>
  <div id="app">
    <Homepage/>
  </div>
</template>

<script>
import Homepage from "./components/Homepage.vue";

export default {
  name: "app",
  components: {
    Homepage
  }
};
</script>

<style scoped>
#app {
  height: 100vh;
}
</style>
