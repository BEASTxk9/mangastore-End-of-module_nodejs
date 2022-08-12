<template>
    <section id="admin">

<div id="con" class="container" v-if="products">

<!-- nav -->
<div class="row justify-content-center pt-3">
  <!-- ___________ -->
        <div id="table" class="col-sm-1 mb-1">
            <p id="logo-text">ADMIN</p>
        </div>
<!-- __________ -->
        <div id="table" class="col-sm-2">
<addproduct></addproduct>
        </div>
<!-- _________ -->
<div id="table" class="col-sm-9">

  <h6 id="logo-text" class="py-1 text-end">
   <i id="logo" class="fa-solid fa-book-open"></i> | Unlimited Void
  </h6>
  <p id="sub-text" class="text-end">manga at your fingertips</p>
        
              
        </div>
    </div>

<!-- ____________________ -->
<div class="row justify-content-center">

<!-- side nav -->
<div id="sidenav" class="col-sm-1 text-start">
<nav>

<a href="#">hello</a>

</nav>
</div>
<!-- table -->
<div id="table1" class="col-sm-11">
<table class="table table-bordered">
    <thead>
        <th>ID</th>
        <th>Title</th>
        <th>bookName</th>
        <th>img</th>
        <th>category</th>
        <th>description</th>
        <th>price</th>
        <th>datereleased</th>
        <th>created_by</th>
        <th>Actions</th>
    </thead>
    <tbody>

        <tr v-for="(product, index) in products" :key="index">
 <td class="px-3">{{product.Product_id}}</td>
  <td>{{product.title}}</td>
    <td>{{product.bookName}}</td>
    <td><img class="rounded text-center justify-content-center mx-1" :src="product.img" alt="" defer></td>
    <td>{{product.category}}</td>
    <td id="description">"{{product.description}}"</td>
      <td>R{{product.price}}</td>
        <td>{{product.datereleased}}</td>
          <td>{{product.created_by}}</td>
          <td>
            <form @submit.prevent="deleteProduct" method="DELETE">
              <button v-on:click="submit">Delete Product</button>
            </form>
          </td>
      
        </tr>

    </tbody>
</table>
</div>

</div>

</div>

<div v-else>
        <h2>Please wait or restart the page...</h2>
    </div>
  </section>

</template>

<script>
import addproduct from '../components/AddProductView.vue'

export default {
components:{
addproduct
},
mounted() {
        this.$store.dispatch("getproducts")
    },
    computed: {
        products() {
            return this.$store.state.products
        }
        },
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
deleteProduct(){
this.$store.dispatch('deleteProduct', {
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
#table{
    border-left: 0.3px solid rgba(128, 128, 128, 0.282);
    border-top: 0.3px solid rgba(128, 128, 128, 0.282);
    border-right: 0.3px solid rgba(128, 128, 128, 0.282);
      background-color: rgba(235, 233, 233, 0.136);
}

#table1{
    border-top: 0.3px solid rgba(128, 128, 128, 0.282);
    border-left: 0.3px solid rgba(128, 128, 128, 0.282);
    border-right: 0.3px solid rgba(128, 128, 128, 0.282);
}

thead{
    font-size: 1.5rem;
}

#sidenav{
       border-top: 0.3px solid rgba(128, 128, 128, 0.282);
           border-left: 0.3px solid rgba(128, 128, 128, 0.282);
}

th{
  padding: 5px;
border-top: none;
border-left: 0.3px solid rgba(128, 128, 128, 0.282);
border-right: 0.3px solid rgba(128, 128, 128, 0.282);
}

img{
  height: 10vh;
}

#description{
  font-size: 13px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

#logo{
  color: purple;
}

#logo-text{
  font-family: 'IBM Plex Mono', monospace;
font-family: 'Titan One', cursive;
  font-weight: 900;
  font-size: 1.3rem;
  margin-top: 10px;
}

#sub-text{
font-family: 'Titan One', cursive;
font-size: 9px;
}
</style>