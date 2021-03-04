<template>
  <div class="nav">
    <router-link to="/"><img class="logo" src="../assets/logo.svg" alt="" /></router-link>
    <div class="nav_two">
      <router-link class="new" to="/login">New Customer?</router-link>
      <AppButton link="signup">Try For Free</AppButton>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AppButton from "./AppButton.vue";
export default {
  components: {
    AppButton,
  },
  setup() {
    const open = ref(false);

    return {
      open,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Sofia light";
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 90%;
  max-width: 1300px;
  margin: auto;
}
.logo {
  margin-right: 50px;
  width: 160px;
}
a {
  text-decoration: none;
  font-size: 15px;
}
.nav_two {
  display: flex;
  align-items: center;
}
.nav_two a {
  margin-left: 20px;
  color: black;
}
a.cta {
  background: #462686;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 100px;
  color: white;
}
@media (max-width: 575px) {
  .nav {
    width: 95%;
  }
  .new {
    font-size: 13px;
  }
  a.cta {
    display: none;
  }
}
</style>
