<template>
  <section id="login">


<div>
    <div class="row justify-content-center">
        <div class="col-sm-8">

                <h2>LOGIN</h2>

<form @submit.prevent="login" method="POST">

<label for="email">Email:</label><br>
     <input type="email" v-model="email" placeholder="Enter your email" autocomplete="on" required><br>

<label for="password">Password</label><br>
    <input type="password" v-model="password" minlength="8" maxlength="15" placeholder="Enter your password"  required><br>

    <button class="mt-4" v-on:click="submit">Login</button>

</form>

        </div>
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

</style>