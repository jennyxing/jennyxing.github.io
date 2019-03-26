<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo/jx-logo.png">
    <div class="icons_container">
      <span @click="handleClick('https://www.twitter.com/jennyxing27')">
        <font-awesome-icon size="2x" :icon="['fab', 'twitter']"/>
      </span>
      <span @click="handleClick('https://www.github.com/jennyxing27')">
        <font-awesome-icon size="2x" :icon="['fab', 'github']"/>
      </span>
      <span @click="handleClick('https://www.linkedin.com/in/jennyxing27')">
        <font-awesome-icon size="2x" :icon="['fab', 'linkedin-in']"/>
      </span>
      <a :href="`mailto:jennyxing27+contact@gmail.com`">
        <font-awesome-icon size="2x" icon="envelope"/>
      </a>
      <span @click="handleClick('https://www.goodreads.com/jennyxing27')">
        <font-awesome-icon size="2x" :icon="['fab', 'goodreads-g']"/>
      </span>
      <span class="hide">
        <font-awesome-icon size="2x" :icon="['fab', 'medium-m']"/>
      </span>
      <span class="hide">
        <font-awesome-icon size="2x" :icon="['fab', 'dribbble']"/>
      </span>
      <span class="hide">
        <font-awesome-icon size="2x" :icon="['fab', 'codepen']"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  methods: {
    handleClick: function(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
}
.icons_container {
  margin-top: 1rem;
}
img {
  width: fit-content;
}
h1 {
  font-family: neutraTextBold, Futura, "Trebuchet MS", Arial, sans-serif;
  font-size: 36px;
}
span,
a {
  cursor: pointer;
  color: #2e2e2c;
  margin: 0.5rem;
}
span:hover,
a:hover {
  color: #dab;
}
.hide {
  display: none;
}
</style>
