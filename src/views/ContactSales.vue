<template>
  <div>
    <AppNav />
    <div class="main">
      <div class="main_content">
        <h1 class="topic">Contact Sales</h1>

        <form action="">
          <div class="sect">
            <div class="input">
              <label for="Last Name">Last Name</label>
              <input type="text" name="Last Name" id="" />
            </div>
            <div class="input">
              <label for="First Name">First Name</label>
              <input type="text" name="First Name" id="" />
            </div>
          </div>
          <div class="sect">
            <div class="input">
              <label for="Work Email">Work Email</label>
              <input type="email" name="Work Email" id="" />
            </div>
          </div>
          <div class="sect">
            <div class="input">
              <label for="Last Name">Phone Number</label>
              <input type="number" name="Last Name" id="" />
            </div>
          </div>
          <div class="sect">
            <div class="input">
              <label for="Product of Interest">Product of Interest</label>
              <input type="text" name="Product of Interest" id="" />
            </div>
          </div>
          <div class="sect">
            <div class="input">
              <label for="Company Name">Company Name</label>
              <input type="text" name="Company Name" id="" />
            </div>
            <div class="input">
              <label for="Company Size">Company Size</label>
              <input type="text" name="Company Size" id="" />
            </div>
          </div>
          <div class="sect">
            <div class="input">
              <label for="How can our expert help you?"
                >How can our expert help you?</label
              >
              <textarea type="text" name="How can our expert help you?" id=""></textarea>
            </div>
          </div>
          <button class="cta">Contact Us</button>
        </form>
        <div class="content">
          <div class="content_top">
            <h1>Request a call from an expert</h1>
            <p>
              Having thoughts on which product works best for you? Fill the form and our
              expert will reach out to you.
            </p>
          </div>
          <div class="content_other">
            <h1>Our offices around Africa</h1>
            <div class="offices">
              <div class="office">
                <h3>Nigeria</h3>
                <p>
                  33a, Adeola Odeku, Victoria <br />
                  Island, Lagos.<br />
                  +234-(0)-8000000000
                </p>
              </div>
              <div class="office">
                <h3>Ghana</h3>
                <p>
                  45, El-Senoussi Street, <br />
                  Accra<br />
                  +233-(0)-277619819
                </p>
              </div>
              <div class="office">
                <h3>South Africa</h3>
                <p>
                  474, Cheriton Drive, Port <br />
                  Shepstone, Kwazulu-Natal<br />
                  +27-(0)-857926978
                </p>
              </div>
              <div class="office">
                <h3>Egypt</h3>
                <p>
                  72, Gameat El-Dewal<br />
                  El-Arabia St., Giza.<br />
                  +20-(0)-35924295
                </p>
              </div>
              <div class="office">
                <h3>Kenya</h3>
                <p>
                  41, Enterprise Rd., Industrial<br />
                  Area , Niarobi<br />
                  +254-(0)-20536766
                </p>
              </div>
              <div class="office">
                <h3>Tunisia</h3>
                <p>
                  13, Rue de Makthar, Dhraa<br />
                  Governorate Kasserine<br />
                  +216-(0)-77367410
                </p>
              </div>
              <div class="office">
                <h3>Mali</h3>
                <p>
                  22, Badalabougou Est.,<br />
                  Bamako.<br />
                  +223-(0)-78175387
                </p>
              </div>
              <div class="office">
                <h3>Tanzania</h3>
                <p>
                  Mbezi Beach, P.O.B: 70339,<br />
                  Dar Salaam<br />
                  +255-(0)-222120119
                </p>
              </div>
              <div class="office">
                <h3>Togo</h3>
                <p>
                  10, E rue des Echis, <br />
                  Lome<br />
                  +228-(0)-22229600
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { AppNav, AppFooter } from "../components";
export default {
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  background: #cccccc31;
}
.main_content {
  width: 90%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
}
.topic {
  font-family: "Sofia Bold";
  margin-bottom: 20px;
}
.main_content form {
  background: white;
  width: 50%;
  height: 100%;
  padding: 100px;
  border-radius: 10px;
  margin-right: 50px;
}
.main_content form .sect {
  display: flex;
  margin-bottom: 20px;
}
.main_content form .sect .input {
  width: 100%;
  margin-right: 20px;
  font-family: "Sofia light";
}
.main_content form .sect .input:last-child {
  margin-right: 0;
}
.main_content form .sect .input input,
.main_content form .sect .input textarea {
  width: 100%;
  padding: 20px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #150b28ad;
  outline: none;
}
.main_content form .sect .input textarea {
  height: 130px;
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
}
.content {
  width: 50%;
}
.content h1,
h2,
h3,
h4 {
  font-family: "Sofia Semibold";
  color: #333333;
  margin-bottom: 20px;
}
.content h3 {
  text-transform: uppercase;
}
.content p {
  font-family: "Sofia Semibold";
  color: #333333a4;
  font-size: 15px;
  line-height: 30px;
}
.offices {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
}
@media (min-width: 1220px) {
  .topic {
    display: none;
  }
}
@media (max-width: 1220px) {
  .main_content {
    flex-direction: column;
    align-items: center;
  }
  .main_content form {
    width: 100%;
    margin-bottom: 40px;
    margin-right: 0px;
  }
  .content {
    width: 100%;
  }
}
@media (max-width: 650px) {
  .offices {
    grid-template-columns: repeat(2, 1fr);
  }
  .main_content form {
    padding: 30px;
  }
}
@media (max-width: 450px) {
  .main_content form {
    padding: 30px;
  }
  .content {
    text-align: center;
  }
  .offices {
    text-align: center;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
