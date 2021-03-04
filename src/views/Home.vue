<template>
  <div>
    <AppNav />
    <div class="hero">
      <div class="hero_text">
        <h1>Collaborate with your team<br />and get more done</h1>
        <p>
          Communicate effectively with Oneburner for easy<br />collaboration, team work
          and remote work.
        </p>
        <AppButton link="login">Start Free Trial</AppButton>
      </div>
      <img src="../assets//hero.svg" alt="" />
    </div>
    <AppSponsors />
    <div class="mini_nav">
      <div class="mini_nav_link active">CRM & Sales</div>
      <div class="mini_nav_link">Human Resources</div>
      <div class="mini_nav_link">Marketing</div>
      <div class="mini_nav_link">Remote Work</div>
      <div class="mini_nav_link">Project Management</div>
      <div class="mini_nav_link">Social Media</div>
    </div>
    <div class="shadow">
      <div class="hero other">
        <div class="hero_text">
          <h1 class="other">Manage team activities<br />all in one place</h1>
          <p>
            Keep your team organized and informed with activities<br />that are up to
            date.
          </p>
        </div>
        <img src="../assets/manage-team.svg" alt="" />
      </div>
    </div>

    <div class="hero other reverse">
      <div class="hero_text">
        <h1 class="other">Bring your team up to speed</h1>
        <p>
          Collaborate on a project from start to finish, see information at a<br />glance,
          add comment, attachment and more with Oneburner
        </p>
      </div>
      <img src="../assets/bringteam.svg" alt="" />
    </div>
    <div class="hero other">
      <div class="hero_text">
        <h1 class="other">Automated task timeline</h1>
        <p>View dates, projects, calender, spirit and more with reliability</p>
      </div>
      <img src="../assets/automated-task.svg" alt="" />
    </div>
    <AppIntegrates />
    <div class="hero other reverse">
      <div class="hero_text">
        <h1 class="other">Timeless report generator</h1>
        <p>
          You can generate quick report of activities of all that hs to do<br />with the
          daily running of your business and teams
        </p>
      </div>
      <img src="../assets/timeless.svg" alt="" />
    </div>
    <div class="hero other">
      <div class="hero_text">
        <h1 class="other">Efficient lead management</h1>
        <p>
          Track and manage prospective customers. Manage<br />
          their notes, emails, meetings, calls, contacts, and files.
        </p>
      </div>
      <img src="../assets/efficient.svg" alt="" />
    </div>
    <div class="hero other reverse">
      <div class="hero_text">
        <h1 class="other">24/7 customer support</h1>
        <p>
          Our team of responsible member is always available to help you all day long
          <br />and ready to meet your demand. Reach out to us and we will always be
          there.
        </p>
      </div>
      <img src="../assets/customer-support.svg" alt="" />
    </div>
    <div class="better_way">
      <h1>Choose a better way to work</h1>
      <p>No credit card details | No additional installation | No time wasting</p>
      <AppButton link="login">Start my free trial</AppButton>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  width: 90%;
  max-width: 1300px;
  margin: auto;
}

.hero.reverse {
  flex-direction: row-reverse;
}
.hero.other {
  padding: 100px 50px;
  margin-top: 0;
}
.shadow {
  box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.063);
}
.hero_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.hero.reverse .hero_text {
  margin-left: 50px;
}
.hero h1 {
  color: #462686;
  font-size: 35px;
  font-family: "Sofia Bold";
}
.hero h1.other {
  color: black;
  font-family: "Sofia Semibold";
  font-size: 30px;
}
.hero p {
  font-family: "Sofia light";
  margin: 30px 0;
}
.hero img {
  width: 55vw;
  max-width: 600px;
  min-width: 300px;
}

.mini_nav {
  width: 90%;
  max-width: 1300px;
  margin: auto;
  margin-top: 60px;
  font-family: "Sofia Semibold";
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #462686;
  overflow: hidden;
}
.mini_nav_link {
  padding: 20px 10px;
  font-size: 14px;
}
.mini_nav_link.active {
  background: #462686;
  color: white;
}
.better_way {
  background: #7837f8;
  padding: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.better_way h1 {
  font-family: "Sofia Bold";
}
.better_way p {
  font-family: "Sofia light";
  margin: 25px 0;
}
@media (max-width: 990px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero.other {
    padding: 100px 20px;
  }
  .hero.reverse {
    flex-direction: column;
  }
  .hero.reverse .hero_text {
    margin-left: 0px;
  }
  .hero_text {
    align-items: center;
    margin-bottom: 40px;
  }
  .mini_nav {
    grid-template-columns: repeat(1, 1fr);
  }
  .mini_nav_link {
    padding: 20px 10px;
    font-size: 14px;
  }
  .better_way {
    padding: 100px 20px;
  }
}
</style>
