<template>
  <section id="register">


<div class="container">
    <div class="row">
        <div class="col-sm-8">
<h1>REGISTER</h1>

            <form @submit.prevent="signUp" action="https://mangastore-end-of-module.herokuapp.com/register" method="POST">

<input type="text" v-model="fullname" id="fullname" placeholder="fullname" required><br>

<input type="text" v-model="email" id="email" placeholder="email" required><br>

<input type="password" v-model="password" id="password" placeholder="password" required><br>

<input type="text" v-model="userRole" id="userRole" placeholder="userRole" required><br>

<input type="text" v-model="phone_number" id="phone_number" placeholder="phone_number" required><br>

<input type="text" v-model="join_date" id="join_date" placeholder="join_date" required><br>

<button v-on:click="submit">Register</button>

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