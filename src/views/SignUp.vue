<template>
  <div>
    <AuthNav />
    <div class="main">
      <div class="top">
        <h1>Sign Up</h1>
      </div>
      <form action="">
        <label for="Full Name">Full Name</label>
        <input type="text" name="" id="" />
        <label for="Username">Username</label>
        <input type="text" name="" id="" />
        <label for="Email">Email</label>
        <input type="email" name="" id="" />
        <label for="Email">Password</label>
        <div class="password">
          <input ref="password" type="password" name="" id="" />
          <img @click="showPassword" src="../assets/eye.svg" alt="" srcset="" />
        </div>
        <button class="cta">Sign Up</button>
      </form>

      <div class="other">
        <span>-Or sign up with:</span>
        <div class="imgs">
          <img src="../assets/outlook-sign.svg" alt="" />
          <img src="../assets/linkedin-sign.svg" alt="" />
          <img src="../assets/google-sign.svg" alt="" />
        </div>
      </div>
    </div>
    <AppCopy />
  </div>
</template>

<script>
import { ref } from "vue";
import { AuthNav, AppCopy } from "../components";
export default {
  components: {
    AuthNav,
    AppCopy,
  },
  setup() {
    const password = ref("password");

    function showPassword() {
      let x = password.value;
      if (x.type === "password") {
        x.type = "text";
        this.line = false;
      } else {
        x.type = "password";
        this.line = true;
      }
    }

    return { showPassword, password };
  },
};
</script>

<style scoped>
.main {
  width: 90%;
  max-width: 500px;
  display: grid;
  place-items: center;
  height: 100vh;
  max-height: 700px;
  margin: auto;
}
.top {
  text-align: center;
}
h1 {
  font-family: "Sofia semibold";
}
label,
p {
  font-family: "Sofia light";
}
.cta {
  font-family: "Sofia light";
  font-size: 17px;
  background: #462686;
  padding: 15px 20px;
  border-radius: 100px;
  color: white;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
}
.forgot {
  color: #462686;
  cursor: pointer;
}
input {
  width: 100%;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #150b28ad;
  outline: none;
}
.password {
  position: relative;
}
.password img {
  position: absolute;
  right: 20px;
  width: 20px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.other,
.imgs {
  display: flex;
  align-items: center;
  font-family: "Sofia light";
  justify-self: flex-start;
}
.other span,
.other img {
  margin-right: 15px;
}
.other img {
  cursor: pointer;
}
@media (max-width: 350px) {
  .other {
    justify-self: center;
    flex-direction: column;
  }
  .other span,
  .other img {
    margin-right: 0px;
    margin: 0 10px;
  }
  .other span {
    margin-bottom: 15px;
  }
}
</style>
