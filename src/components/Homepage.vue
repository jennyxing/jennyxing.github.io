<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo/jx-logo.png" />
    <div class="icons_container">
      <span @click="handleClick('https://www.linkedin.com/in/jennyxing')">
        <font-awesome-icon size="2x" :icon="['fab', 'linkedin-in']" />
      </span>
      <span @click="handleClick('https://www.github.com/jennyxing')">
        <font-awesome-icon size="2x" :icon="['fab', 'github']" />
      </span>
      <span @click="handleClick('https://calendly.com/jennyxing/chat')">
        <font-awesome-icon size="2x" icon="calendar-day" />
      </span>
      <a :href="`mailto:jenny@jennyxing.com`">
        <font-awesome-icon size="2x" icon="envelope" />
      </a>
      <span class="hide">
        <font-awesome-icon size="2x" :icon="['fab', 'medium-m']" />
      </span>
      <span class="hide">
        <font-awesome-icon size="2x" :icon="['fab', 'dribbble']" />
      </span>
      <span class="hide">
        <font-awesome-icon size="2x" :icon="['fab', 'codepen']" />
      </span>
    </div>
    <div class="temporary-links">
      <h3>Personal Technical Interviewing Resources</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1kbCU4ynVAktr_sjQvl5BcWAM_Kk3CRPojYzK_18gbrM/edit?usp=sharing"
            >Technical Interviews: The Non-Technical Side</a
          >
        </li>
        <br />
        <li>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1dxZISDzTUVaA_au6hyOKZe1tkj5DA5Kppay8RBIAxyQ/edit?usp=sharing"
            >Interviewing Questions To Ask</a
          >
        </li>
      </ul>
    </div>
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
