<template>
    <section id="admin">

<div class="container" v-if="products">

<!-- nav -->
    <div class="row justify-content-center pt-3">
        <div id="sidenav" class="col-sm-1 logo">
            <p>ADMIN</p>
        </div>

        <div id="table" class="col-sm-8">

  <h6 id="logo" class="py-1 text-end">
            <span id="s1">P</span><span id="s5">ick</span
            ><span id="s2">'n <span id="s3">P</span>ay</span>
            <span id="s4">Online</span>
          </h6>
        
              
        </div>
    </div>


<div class="row justify-content-center">
<!-- side nav -->
<div id="sidenav" class="col-sm-1 text-start">
<nav>

    <router-link to="/products">Shop</router-link><br>
      <router-link to="/Admin"><i class="fa-solid fa-user"></i></router-link>

  </nav>
</div>
<!-- table -->
<div id="table" class="col-sm-10">
<table class="table table-border">
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
    </thead>
    <tbody>

        <tr v-for="(product, index) in products" :key="index">
 <td>{{product.Product_id}}</td>
  <td>{{product.title}}</td>
    <td>R{{product.bookName}}</td>
    <td><img class="rounded text-center justify-content-center mx-1" :src="product.img" alt="" defer></td>
    <td>{{product.category}}</td>
    <td id="description">{{product.description}}</td>
      <td>{{product.price}}</td>
        <td>{{product.datereleased}}</td>
          <td>{{product.created_by}}</td>
      
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

export default {
mounted() {
        this.$store.dispatch("getproducts")
    },
    computed: {
        products() {
            return this.$store.state.products
        }
        }
}
</script>

<style>
img{
  height: 10vh;
}


</style>