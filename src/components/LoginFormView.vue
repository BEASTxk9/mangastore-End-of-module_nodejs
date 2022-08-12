<template>
  <section id="login">


<div class="container">
    <div class="row">
        <div class="col-sm-8">

                <h1>LOGIN</h1>

<form @submit.prevent="login" method="POST">

<label for="email">Email:</label><br>
     <input type="email" v-model="email" placeholder="Enter your email" required><br>

<label for="password">Password</label><br>
    <input type="password" v-model="password" placeholder="Enter your password" required><br>

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