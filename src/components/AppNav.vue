<template>
  <div class="nav">
    <div class="nav_one">
      <router-link to="/"
        ><img class="logo" src="../assets/logo.svg" alt=""
      /></router-link>
      <div class="nav_one_links">
        <router-link to="" class="dropDown" @click.prevent="drop = !drop">
          <span>Product</span
          ><svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41 0.840088L6 5.42009L10.59 0.840088L12 2.25009L6 8.25009L0 2.25009L1.41 0.840088Z"
              fill="#111111"
            />
          </svg>
        </router-link>
        <router-link to="">Pricing</router-link>
        <router-link to="/enterprise">Enterprise</router-link>
        <router-link to="">Support</router-link>
      </div>
    </div>
    <div class="nav_two">
      <router-link to="/contact-sales">Contact Sales</router-link>
      <router-link to="/login">Login</router-link>
      <AppButton link="signup">Try For Free</AppButton>
    </div>
    <div class="bar" :class="{ open: open }" @click="(open = !open), (drop = false)">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
    <div class="drop" :class="{ open: drop }">
      <img class="close" src="../assets/close.svg" @click="drop = false" alt="" />
      <div class="sect">
        <img src="../assets/client.svg" alt="" />
        <div class="ab">
          <h4>Clients</h4>
          <p>See the amazing team that uses <br />Oneburner.</p>
        </div>
      </div>
      <div class="sect">
        <img src="../assets/store.svg" alt="" />
        <div class="ab">
          <h4>Oneburner Stores</h4>
          <p>Explore our ready made solutions to <br />expand your business.</p>
        </div>
      </div>
      <div class="sect">
        <img src="../assets/integrate.svg" alt="" />
        <div class="ab">
          <h4>Integrations</h4>
          <p>
            Connect different solution to<br />
            Oneburner and get more done.
          </p>
        </div>
      </div>
      <div class="sect">
        <img src="../assets/list.svg" alt="" />
        <div class="ab">
          <h4>Why Oneburner?</h4>
          <p>Learn more about our features, <br />success rates,benefits and demo.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile_nav" :class="{ open: open }">
    <div class="mobile_nav_main">
      <router-link to="" class="dropDown" @click.prevent="drop = !drop">
        <span>Product</span
        ><svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41 0.840088L6 5.42009L10.59 0.840088L12 2.25009L6 8.25009L0 2.25009L1.41 0.840088Z"
            fill="#111111"
          />
        </svg>
      </router-link>
      <router-link to="">Pricing</router-link>
      <router-link to="/enterprise">Enterprise</router-link>
      <router-link to="">Support</router-link>
      <router-link to="/contact-sales">Contact Sales</router-link>
      <router-link to="/login">Login</router-link>
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

    const drop = ref(false);

    return {
      open,
      drop,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Sofia light";
}
.nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  width: 100%;
  max-width: 1300px;
  margin: auto;
}

.logo {
  margin-right: 50px;
  width: 160px;
}
.nav_one {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_one_links {
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
  font-size: 15px;
}
.nav_one_links a {
  margin-right: 20px;
  color: black;
}
.dropDown span {
  margin-right: 5px;
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
.drop {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 50px 20px;
  background: white;
  transform: translateY(90%);
  box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.063);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  z-index: 10;
}
.close {
  display: none;
}
.drop .sect {
  display: flex;
  align-items: flex-start;
  margin-right: 10px;
}
.drop .sect h4 {
  color: #462686;
}
.drop .sect p {
  font-size: 13px;
}
.drop .sect img {
  margin-right: 10px;
}
.drop.open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(100%);
}
.bar {
  display: none;
}
.mobile_nav {
  display: none;
}
@media (max-width: 990px) {
  .nav_one_links,
  .nav_two {
    display: none;
  }
  .bar {
    display: block;
    width: 30px;
    cursor: pointer;
  }
  .bar span {
    width: 100%;
    height: 3px;
    background: #462686;
    display: block;
    margin-bottom: 5px;
    transition: all 500ms;
    position: relative;
    bottom: 0px;
  }
  .bar.open span:nth-child(1) {
    transform: rotate(45deg);
  }
  .bar.open span:nth-child(2) {
    opacity: 0;
  }
  .bar.open span:nth-child(3) {
    bottom: 16px;
    transform: rotate(-45deg);
  }

  .mobile_nav {
    opacity: 0;
    pointer-events: none;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -70%);
    box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.063);
    border-radius: 20px;
    padding: 50px;
    background: rgb(255, 255, 255);
    transition: all 0.3s;
  }
  .mobile_nav.open {
    opacity: 1;
    pointer-events: all;
    transform: translate(-50%, -60%);
  }
  .mobile_nav_main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .mobile_nav_main a {
    margin-bottom: 20px;
  }
  .drop {
    padding: 50px 30px;
    flex-direction: column;
  }
  .close {
    display: block;
    position: absolute;
    top: 10px;
    right: 30px;
    width: 15px;
    cursor: pointer;
  }
  .drop .sect {
    margin-right: 0px;
    margin-bottom: 20px;
    flex-direction: column;
  }
  .drop .sect img {
    margin-right: 0px;
    margin-bottom: 20px;
  }
}
</style>
