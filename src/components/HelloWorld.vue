<template>
  <div>
    <h1>Coming Soon<sup>TM</sup>
    </h1>
    <font-awesome-icon :icon="['fab', 'twitter']" />
    <font-awesome-icon :icon="['fab', 'github']" />
    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
    <font-awesome-icon icon="envelope" />
    <font-awesome-icon :icon="['fab', 'goodreads-g']" />
    <font-awesome-icon :icon="['fab', 'medium-m']" />
    <font-awesome-icon :icon="['fab', 'dribbble']" />
    <font-awesome-icon :icon="['fab', 'codepen']" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: neutraTextBold, Futura, "Trebuchet MS", Arial, sans-serif;
  font-size: 36px;
}
</style>
