<template>
  <router-view class="app"></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: "Sofia Bold";
  src: url("./assets/fonts/SofiaProBold.ttf");
  src: url("./assets/fonts/SofiaProBold.woff");
}
@font-face {
  font-family: "Sofia Semibold";
  src: url("./assets/fonts/SofiaProSemiBold.ttf");
  src: url("./assets/fonts/SofiaProSemiBold.woff");
}
@font-face {
  font-family: "Sofia Light";
  src: url("./assets/fonts/SofiaProExtraLight.ttf");
  src: url("./assets/fonts/SofiaProExtraLight.woff");
}

*,
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
