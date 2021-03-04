<template>
  <div>
    <AppNav />

    <div class="hero">
      <img src="../assets/enterprise-hero.svg" alt="" />
      <div class="cont">
        <h1>Collaborate with your team<br />and get more done</h1>
        <p>
          Communicate effectively with Oneburner for easy<br />collaboration, team work
          and remote work.
        </p>
        <AppButton link="login">Request a Demo</AppButton>
      </div>
    </div>
    <AppSponsors />
    <div class="grows">
      <h2>How Oneburner help enterprises grow</h2>
      <div class="grows_content">
        <p>
          Oneburner software solution helps your business by creating an enabling
          environment for easy communication and feedbacks in real time. Oneburner brings
          all your user and teams in a single place with 99.99% uptime SLA and Data
          security
        </p>
        <div class="ticks">
          <div class="tick">
            <img src="../assets/checked.svg" alt="" />
            <span>Data protection and control</span>
          </div>
          <div class="tick">
            <img src="../assets/checked.svg" alt="" />
            <span>Reporting and analytics</span>
          </div>
          <div class="tick">
            <img src="../assets/checked.svg" alt="" />
            <span
              >Use single sign-on and multi-factor authentication to secure accounts</span
            >
          </div>
          <div class="tick">
            <img src="../assets/checked.svg" alt="" />
            <span>Enterprise integration with other tools</span>
          </div>
        </div>
      </div>
    </div>
    <div class="award">
      <img src="../assets/badge.svg" alt="" srcset="" />
      <div>
        <h1>Best Collaboration Software</h1>
        <p>Africa tech coalition award</p>
      </div>
    </div>
    <AppIntegrates />

    <div class="region">
      <div class="region_main">
        <h2>Our Regional Presence</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer
        </p>

        <img src="../assets/africa.svg" alt="" />
      </div>
    </div>

    <div class="feedback">
      <p>
        Best. Product. Ever! We like Oneburner more and more each day because it makes our
        work a lot<br />
        easier. It's just amazing. Very easy to use, impressed us on multiple levels.
        Thank you so much for<br />
        your help and is worth much more than we paid. We were treated like royalty.
      </p>
      <div class="ceo">
        <img src="../assets/ceo.svg" alt="" />
        <div class="ceo_about">
          <div class="name">Kemi Hassan</div>
          <div class="job">CEO, Saharaa Inc.</div>
        </div>
      </div>
    </div>

    <div class="better_way">
      <h1>Want to learn more on how we can<br />impact your enterprise?</h1>
      <AppButton link="contact-sales">Contact Sales</AppButton>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import { AppNav, AppFooter, AppSponsors, AppIntegrates } from "../components";
import AppButton from "../components/AppButton.vue";

export default {
  components: {
    AppNav,
    AppButton,
    AppFooter,
    AppSponsors,
    AppIntegrates,
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  width: 90%;
  max-width: 1400px;
  margin: auto;
  display: grid;
  place-items: center;
  padding: 100px 0;
  margin-bottom: 150px;
}
.cont {
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.hero h1 {
  font-family: "Sofia bold";
  color: #462686;
  font-size: 40px;
}
.hero p {
  margin: 30px 0;
  font-family: "Sofia light";
}
.hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  pointer-events: none;
}
.grows {
  background: #7837f8;
  color: white;
  padding: 100px 0;
  padding-bottom: 200px;
  margin-top: 50px;
}
.grows h2 {
  text-align: center;
  font-family: "Sofia Semibold";
  margin-bottom: 50px;
}
.grows_content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  max-width: 1400px;
  margin: auto;
  font-family: "Sofia light";
}
.grows_content p {
  width: 45%;
  line-height: 30px;
}
.tick {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.tick img {
  margin-right: 10px;
  width: 20px;
}
.award {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 900px;
  width: 90%;
  margin: auto;
  margin-top: -150px;
  background: white;
  border-radius: 20px;
  padding: 30px 0;
  box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.063);
}
.award h1 {
  font-family: "Sofia Semibold";
}
.award p {
  font-family: "Sofia light";
}
.region {
  padding: 100px 0;
  text-align: center;
  background: #cccccc31;
}
.region_main {
  width: 90%;
  max-width: 1400px;
  margin: auto;
}
.region h2 {
  text-align: center;
  font-family: "Sofia Semibold";
}
.region p {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 130px;
  font-family: "Sofia light";
  max-width: 700px;
  line-height: 30px;
}
.region img {
  width: 55vw;
  max-width: 600px;
  min-width: 300px;
}
.feedback {
  width: 90%;
  max-width: 1400px;
  margin: auto;
  padding: 100px 0;
}
.feedback p {
  font-family: "Sofia light";
  line-height: 33px;
  font-size: 20px;
  text-align: center;
}
.feedback .ceo {
  position: relative;
  display: flex;
  width: 240px;
  margin: auto;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
}
.feedback .ceo::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translateY(-50%) translateX(-100%);
  width: 400px;
  height: 1px;
  background: rgba(0, 0, 0, 0.151);
}
.feedback .ceo::before {
  content: "";
  position: absolute;
  top: 50%;
  right: -10%;
  transform: translateY(-50%) translateX(100%);
  width: 400px;
  height: 1px;
  background: rgba(0, 0, 0, 0.151);
}
.feedback .ceo img {
  width: 90px;
}
.feedback .ceo_about .name {
  font-family: "Sofia Semibold";
  font-size: 16px;
}
.feedback .ceo_about .job {
  font-size: 16px;
  font-family: "Sofia light";
}
.better_way {
  background: #cccccc31;
  padding: 100px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.better_way h1 {
  font-family: "Sofia Bold";
  margin-bottom: 50px;
}
@media (max-width: 1090px) {
  .grows_content {
    flex-direction: column;
  }
  .grows_content p {
    width: 100%;
  }
  .ticks {
    margin-top: 50px;
  }
}
@media (max-width: 990px) {
  .hero h1 {
    font-size: 30px;
  }
  .hero img {
    display: none;
  }
  .better_way {
    padding: 100px 20px;
  }
}
@media (max-width: 1110px) {
  .feedback .ceo::after {
    display: none;
  }
  .feedback .ceo::before {
    display: none;
  }
}
@media (max-width: 672px) {
  .award {
    padding: 50px 10px;
    text-align: center;
  }
  .feedback p {
    font-size: 16px;
  }
}
</style>
