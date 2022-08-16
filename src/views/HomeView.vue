<template>
  <div id="login_register">
    <h1>Unlimited Void</h1>
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
  padding-bottom: 17.7vh;
  padding-top: 1rem;
}

#toggle{
  margin-bottom: 58vh;
  transition: all 0.3s ease-in-out;
}

#card {
  background-color: antiquewhite;
  border: 0.5px solid grey;
  border-radius: 10px;
  gap: 10px;
  padding-bottom: 10px;
  padding-top: 5px;
  height: 66vh;
}

.btn{
  background-color: rgb(203,95,159);
  margin-bottom: 10px;
}
</style>
