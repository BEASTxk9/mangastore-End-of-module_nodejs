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

<button type="submit" class="button" onclick="this.classList.toggle('button--loading')"><span class="button__text">Register</span></button>

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