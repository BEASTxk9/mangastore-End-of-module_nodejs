<template>
  <div id="login_register">
    <h1>Your Account</h1>
    <div class="container">

      <div class="row justify-content-center">

        <!-- register -->
        <div id="card" class="col-sm-12 col-md-5 mx-1">
          <registerform></registerform>
        </div>

        <!-- login -->
        <div id="card" class="col-sm-12 col-md-5 mx-1">
          <loginform></loginform>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import registerform from '../components/RegisterFormView';
import loginform from '../components/LoginFormView.vue';

export default {
  components: {
    registerform,
    loginform
  }
}


</script>

<style scoped>
body {
  overflow-x: none;
}

#login_register {
  padding-bottom: 12vh;
}

#card {
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  background-color: antiquewhite;
  border: 0.5px solid grey;
  border-radius: 10px;
  gap: 10px;
  padding-bottom: 10px;
  padding-top: 5px;
}
</style>