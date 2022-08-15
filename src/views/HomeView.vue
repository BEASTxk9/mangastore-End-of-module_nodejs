<template>
<section id="login_register">
  <div class="container">

  
  <h1>home</h1>
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

</section>
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
#login_register{
padding-bottom: 17vh;
}

#card{
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  background-color: antiquewhite;
  border: 0.5px solid grey;
  border-radius: 10px;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}


</style>