<template>
  <div class="footer">
    <div class="top">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="main">
      <div class="connect">
        <div class="connect_top">
          <h5 class="bold">No 1 CRM solution in Africa</h5>
          <p>Terms of Use | Privacy Policy</p>
        </div>
        <div class="connect_bottom">
          <p>Get in touch</p>
          <h4 class="bold">+234-80-000-0000</h4>
          <div class="socials">
            <a href=""><img src="../assets/facebook.svg" alt="" /></a>
            <a href=""><img src="../assets/twitter.svg" alt="" /></a>
            <a href=""><img src="../assets/linkedin.svg" alt="" /></a>
            <a href=""><img src="../assets/youtube.svg" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="connect_more">
        <div class="sect">
          <h3>PRODUCT</h3>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Trust</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Oneburner Partners</a></li>
          </ul>
        </div>
        <div class="sect">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">In the News</a></li>
          </ul>
        </div>
        <div class="sect">
          <h3>ONEBURNER FOR TEAMS</h3>
          <ul>
            <li><a href="#">Engineering</a></li>
            <li><a href="#">Financial Services</a></li>
            <li><a href="#">CRM and Sales</a></li>
            <li><a href="#">IT</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Human Resources</a></li>
            <li><a href="#">Project Management</a></li>
            <li><a href="#">Remote Work</a></li>
          </ul>
        </div>
        <div class="sect">
          <h3>RESOURCES</h3>
          <ul>
            <li><a href="#">Community</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Video Tutorials</a></li>
            <li><a href="#">Professional Services</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Webinar</a></li>
            <li><a href="#">Find a Partner</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copy">© 2020 Oneburner.com | All Rights Reserved.</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 90%;
  max-width: 1300px;
  margin: auto;
  padding: 100px 0;
}
.main,
.connect_more {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.connect_more {
  width: 63%;
}
.main .connect {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}
.main .connect_top {
  margin-bottom: 50px;
}
.main .connect_top h5 {
  font-size: 18px;
  margin-bottom: 10px;
}
.main .connect_bottom h4 {
  margin: 20px 0;
  font-size: 20px;
}
.main .bold {
  font-family: "Sofia Semibold";
}
.main p {
  font-family: "Sofia light";
}
.main .socials img {
  margin-right: 10px;
}
.connect_more .sect {
  margin-right: 20px;
}
.connect_more .sect h3 {
  font-family: "Sofia Semibold";
  margin-bottom: 15px;
}
.connect_more .sect ul {
  list-style: none;
}
.connect_more .sect ul li {
  margin-bottom: 7px;
}
.connect_more .sect ul li a {
  font-family: "Sofia light";
  color: black;
  text-decoration: none;
}
.copy {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgb(232, 232, 232);
  font-family: "Sofia light";
}
@media (max-width: 1000px) {
  .main,
  .connect_more {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .connect_more {
    margin-top: 50px;
  }
  .connect_more .sect {
    margin-top: 50px;
  }
}
</style>
