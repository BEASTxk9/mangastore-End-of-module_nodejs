<template>
<section id="login_register">

<h1>home</h1>

<div class="container">
  <div class="row justify-content-center">

<!-- register -->
    <div class="col-sm-5">
      <registerform></registerform>
    </div>

<!-- login -->
    <div class="col-sm-5">
      <loginform></loginform>
    </div>

  </div>
</div>

</section>
</template>

<script>
import registerform from '../components/RegisterFormView';
import loginform from '../components/LoginFormView.vue';

export default {
  name: 'HomeView',
  components: {
  registerform,
  loginform
  }
}
</script>

<style scoped>
#login_register{
height: 88.2vh;
}


</style>