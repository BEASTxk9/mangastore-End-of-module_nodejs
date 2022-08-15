<template>
  <section id="register">


<div>
    <div class="row justify-content-center">
        <div class="col-sm-8">
<h2>REGISTER</h2>

            <form @submit.prevent="register" method="POST">

<label for="fullname">Name:</label><br>
<input type="text" v-model="fullname" id="fullname" placeholder="fullname" required><br>

<label for="email">Email:</label><br>
<input type="email" v-model="email" id="email" placeholder="email" required><br>

<label for="password">Password:</label><br>
<input type="password" v-model="password" id="password" placeholder="password" minlength="8" maxlength="15" required><br>

<label for="userRole">User Role:</label><br>

<select v-model="userRole" id="userRole" aria-placeholder="SELECT" required>
<option value="user">User</option>
<option value="admin">Admin</option>
</select>
<br>

<label for="phone_number">Phone Number:</label><br>
<input type="tel" v-model="phone_number" id="phone_number" placeholder=" Enter your phone number" maxlength="10" required><br>

<label for="date">Date:</label><br>
<input type="date" v-model="join_date" id="join_date" placeholder="Enter current date" required><br>

<button class="mt-4" v-on:click="submit">Register</button>

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
       fullname: '',
       email: '',
       password: '',
       userRole: '',
       phone_number: '',
       join_date: '',
    }
},

methods: {
register(){
this.$store.dispatch('register', {
                fullname: this.fullname,
                email: this.email, 
                password: this.password,
                userRole: this.userRole, 
                phone_number: this.phone_number,
                join_date: this.join_date,
            })
}
}

}

</script>

<style scoped>
select, #join_date{
    width: 65%;
    padding-top: 3px;
    padding-bottom: 3px;
}
</style>