<template>
  <div id="login_register">
     <!-- type writer -->
    <div class="container typewriter-container">
      <transition name="fade" appear>
        <h1 class="typewriter-text">
          Welcome<br>
        </h1>
      </transition>
    </div>

     <button 
            class="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Click
          </button>
    <div class="container">

      <div id="toggle" class="row justify-content-center">
        <!-- register -->
        <div class="col-sm-12 col-md-5 mx-1">

          <div class="collapse" id="collapseExample">
            <div id="card" class="card card-body">
              <registerform></registerform>
            </div>
          </div>
        </div>

        <!-- login -->
        <div class="col-sm-12 col-md-5 mx-1">
          <div class="collapse" id="collapseExample">
            <div id="card" class="card card-body">
              <loginform></loginform>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import registerform from "../components/RegisterFormView";
import loginform from "../components/LoginFormView.vue";

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

export default {
  components: {
    registerform,
    loginform,
  },
};
</script>

<style scoped>
body {
  overflow-x: none;
}

#login_register {
  padding-bottom: 17.5vh;
  padding-top: 1.5rem;
}

#toggle{
  transition: all 0.3s ease-in-out;
}

#card {
  background-color: antiquewhite;
  border: 0.5px solid grey;
  border-radius: 10px;
  gap: 10px;
  padding-top: 5px;
  height: 66vh;
}

.btn{
  background-color: rgb(203,95,159);
  margin-bottom: 10px;
}

.typewriter-text{
  font-size: 5rem;
}
</style>
