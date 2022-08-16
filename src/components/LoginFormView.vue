<template>
  <section id="login">



    <div class="row justify-content-center">
        <div class="col-sm-8">

                <h2>LOGIN</h2>

<form @submit.prevent="login" method="POST">

<label for="email">Email:</label><br>
     <input type="email" v-model="email" placeholder="Enter your email" autocomplete="on" required><br>

<label for="password">Password</label><br>
    <input type="password" v-model="password" minlength="8" maxlength="15" placeholder="Enter your password"  required><br>

   <button type="submit" class="button" onclick="this.classList.toggle('button--loading')">
    <span class="button__text">Login</span>
</button>

</form>

        </div>
    </div>


  </section>
</template>

<script>
export default {
data(){
    return{
       email: '',
       password: '',
    }
},
methods: {
login(){
this.$store.dispatch('login', {

                email: this.email, 
                password: this.password,
              
            })
}
}
}
</script>

<style scoped>
/* button */
.button {
  position: relative;
  margin-top: 10px;
  padding: 8px 16px;
 background-color: rgb(203,95,159);
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
}

.button:active {
background-color: rgb(203,95,159);
}

.button__text {
  font: bold 20px "Quicksand", san-serif;
  color: #ffffff;
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}

.button--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}

@media screen and (max-width: 767.3px) {

 input{
  width: 70%;
 }

  #card {
 
  height: 67vh;
}
 }
</style>