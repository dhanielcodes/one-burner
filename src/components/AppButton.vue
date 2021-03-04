<template>
  <router-link class="cta" :to="`/${link}`"
    ><slot></slot><img src="../assets/arrow.svg" alt=""
  /></router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.cta {
  font-family: "Sofia light";
  background: #462686;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 100px;
  color: white;
  text-decoration: none;
}
</style>
