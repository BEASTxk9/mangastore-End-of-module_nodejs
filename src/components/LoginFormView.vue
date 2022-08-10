<template>
  <section id="login">


<div class="container">
    <div class="row">
        <div class="col-sm-8">

                <h1>LOGIN</h1>

<form @submit.prevent="signUp" method="POST">

     <input type="text" v-model="email" placeholder="email" required><br>

    <input type="password" v-model="password" placeholder="password" required><br>

    <button v-on:click="submit">Login</button>

</form>

        </div>
    </div>
</div>

  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>