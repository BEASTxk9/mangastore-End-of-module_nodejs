<template>
  <section id="admin">
    <div id="con" class="container" v-if="users">
      <!-- nav -->
      <div class="row justify-content-center pt-3">
        <!-- ___________ -->
        <div id="table" class="col-sm-1 mb-1">
          <h1 class="fs-5 pt-4">ADMIN</h1>
        </div>
        <!-- __________ -->
        <div id="table" class="col-sm-2">
         
        </div>
        <!-- _________ -->
        <div id="table" class="col-sm-9 d-flex justify-content-end">
        <span class="mt-3 fw-bold">USERS</span> <img src="https://i.postimg.cc/zDx3C6R9/logo.jpg" class="img-fluid  " style="height:50px;">
        </div>
      </div>

      <!-- ____________________ -->
      <div class="row justify-content-center">
        <!-- side nav -->
        <div id="sidenav" class="col-sm-1 text-start">
          <nav>
               <router-link class="b btn-layout" to="/landing">Home</router-link> 
    <router-link class="b btn-layout" to="/about">About</router-link> 
    <router-link class="b btn-layout" to="/store">Shop</router-link> 
    <router-link class="b btn-layout" to="/contact">Contact</router-link>
       <router-link class="b btn-layout" to="/">Logout</router-link> 
       <router-link class="b btn-layout" to="/admin"><i class="fa-solid fa-bag-shopping"></i></router-link> 
	<router-link class="b btn-layout" to="/adminuser"><i class="fa-solid fa-user"></i></router-link>
          </nav>
        </div>
        <!-- table -->
        <div id="table1" class="col-sm-11">
          <table class="table-fluid table-bordered">
            <thead>
              <th>ID</th>
              <th>fullname</th>
              <th>email</th>
              <th>password</th>
              <th>userRole</th>
              <th>phone_number</th>
              <th>join_date</th>
              <th>Actions</th>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td class="px-3">{{ user.id }}</td>
                <td>{{ user.fullname }}</td>
                <td>{{ user.email }}</td>
                <td id="ps">{{ user.password }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.phone_number }}</td>
                <td>{{ user.join_date }}</td>
    
                <td>

                 <div class="row">
                  <div class="col-sm-5">
                    <button id="delete" class="b btn-layout" v-on:click="$store.dispatch('deleteuser', user.id)">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    </div>

                  <div class="col-sm-5">
                    <button id="update" class="b btn-layout" v-on:click="$store.dispatch('updateuser', user.id)">
                     <i class="fa-solid fa-pen-to-square"></i>
                    </button></div>
                 </div>
                   
                </td>

              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </div>

<div v-else>
    <div class="loader">
    <svg viewBox="0 0 80 80">
        <circle id="test" cx="40" cy="40" r="32"></circle>
    </svg>
</div>

<div class="loader triangle">
    <svg viewBox="0 0 86 80">
        <polygon points="43 8 79 72 7 72"></polygon>
    </svg>
</div>

<div class="loader">
    <svg viewBox="0 0 80 80">
        <rect x="8" y="8" width="64" height="64"></rect>
    </svg>
</div>
</div>
  </section>
</template>

<script>

export default {
  components: {
   
  },
  mounted() {
    this.$store.dispatch("getusers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
 
};
</script>

<style scoped>
*{
  overflow-x: scroll;
}

#admin{
  margin-top: 10px;
}

table{
  overflow-x: scroll;
}


#table {
  border-left: 0.3px solid rgba(128, 128, 128, 0.282);
  border-top: 0.3px solid rgba(128, 128, 128, 0.282);
  border-right: 0.3px solid rgba(128, 128, 128, 0.282);
  background-color: rgba(235, 233, 233, 0.136);
}

#table1 {
  border-top: 0.3px solid rgba(128, 128, 128, 0.282);
  border-left: 0.3px solid rgba(128, 128, 128, 0.282);
  border-right: 0.3px solid rgba(128, 128, 128, 0.282);
}

thead {
  font-size: 1.5rem;
}

#sidenav {
  border-top: 0.3px solid rgba(128, 128, 128, 0.282);
  border-left: 0.3px solid rgba(128, 128, 128, 0.282);
}

th {
    font-size: 1rem;
  padding: 5px;
  border-top: none;
  border-left: 0.3px solid rgba(128, 128, 128, 0.282);
  border-right: 0.3px solid rgba(128, 128, 128, 0.282);
}

img {
  height: 10vh;
}

#ps {
  font-size: 6px;
  flex: wrap;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

#logo {
  color: plum;
}

#logo-text {
  font-family: "IBM Plex Mono", monospace;
  font-family: "Titan One", cursive;
  font-weight: 900;
  font-size: 1.3rem;
  margin-top: 10px;
  color: rgb(128, 0, 128);
}

#sub-text {
  font-family: "Titan One", cursive;
  font-size: 9px;
  color: black;
}

/* button */
.b:before {
  text-align: center;
  transition: all 0.3s ease-in-out;
  content: "";
  width: 0;
  height: 100%;
  position: absolute;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  left: 0;
  top: 0;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  z-index: -1;
}

.b:hover:before {
  color: rgb(255, 255, 255);
  width: 100%;
  left: auto;
  right: 0;
}

.btn-layout {
  text-align: center;
  display: inline-flex;
  margin: 0 5px 0 0;
  position: relative;
  opacity: 0.999;
  padding: 5px 5px;
  text-align: center;
  color: rgb(0, 0, 0);
  border-radius: 3px;
  border: none;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  overflow: hidden;
  font-weight: bold;
   text-decoration: none;
}

.btn-layout:hover {
     text-decoration: none;
  color: rgb(255, 255, 255);
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 50px 3px rgb(203,95,159);
}

#date {
  width: 72%;
  padding-top: 3px;
  padding-bottom: 3px;
}

button {
  font-family: "Titan One", cursive;
  font-weight: 500;
  font-size: 12px;
}

#delete, #update{
  font-size: 1.5rem;
}

@media screen and (max-width: 576px) { 
#sidenav{
	font-size: 10px;
}
}


@media screen and (max-width: 345px) { 
#sidenav{
	font-size: 8px;
}
}
</style>
