<template>
    <section id="admin">

<div class="container" v-if="products">

<!-- nav -->
    <div class="row justify-content-center pt-3">
        <div id="sidenav" class="col-sm-1">
            <p>ADMIN</p>
        </div>

        <div id="table" class="col-sm-11">

  <h6 id="logo" class="py-1 text-end">
           LOGO UNDECIDED YET
          </h6>
        
              
        </div>
    </div>


<div class="row justify-content-center">
<!-- side nav -->
<div id="sidenav" class="col-sm-1 text-start">
<nav>



</nav>
</div>
<!-- table -->
<div class="col-sm-12">
<table class="table table-bordered">
    <thead class="table-bordered">
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
      <td>R{{product.price}}</td>
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

<style scoped>
#table{
    border-top: 0.5px solid rgba(128, 128, 128, 0.282);
}

#sidenav{
       border-top: 0.5px solid rgba(128, 128, 128, 0.282);
}

img{
  height: 10vh;
}


</style>