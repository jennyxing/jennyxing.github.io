<template>
  <div class="container">
    <h1>Jenny Xing</h1>
    <img alt="Vue logo" src="../assets/logo/jx-logo.png" />
    <div class="icons_container">
      <span @click="handleClick('https://www.linkedin.com/in/jennyxing')">
        <font-awesome-icon size="2x" :icon="['fab', 'linkedin-in']" />
      </span>
      <span @click="handleClick('https://www.github.com/jennyxing')">
        <font-awesome-icon size="2x" :icon="['fab', 'github']" />
      </span>
      <span @click="handleClick('https://www.flickr.com/photos/200989686@N02/')">
        <font-awesome-icon size="2x" :icon="['fab', 'flickr']" />
      </span>
      <a :href="`mailto:jenny@jennyxing.com`">
        <font-awesome-icon size="2x" icon="envelope" />
      </a>
    </div>
    <h1 style="font-size:20px">Software Engineer & Counselor-in-Training</h1>
    <h1 style="font-size:16px">I write about my career journey on:</h1>
    <span @click="handleClick('https://medium.com/@jennyxing')">  
        <font-awesome-icon size="2x" :icon="['fab', 'medium']" />
    </span>


  </div>
</template>

<script>
export default {
  name: "Homepage",
  methods: {
    handleClick: function (url) {
      window.open(url, "_blank");
    },
  },
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
  margin-bottom: 1rem;
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
.temporary-links {
  font-family: "Trebuchet MS", sans-serif;
  margin-top: 1rem;
}
</style>
