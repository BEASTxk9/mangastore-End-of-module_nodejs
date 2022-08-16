<template>
 <button class="btn-layout b mt-3" data-bs-toggle="modal"
          data-bs-target="#exampleModal">update</button>


  <!-- Modal1 -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">UPDATE PRODUCT FORM</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
              
                   <div class="col-sm-8">

<form @submit.prevent="updateProduct" method="POST">

<label for="title">Title</label><br>
    <input type="text" v-model="product.title" placeholder="Enter title" required><br>

<label for="bookName">Book Name:</label><br>
    <input type="text" v-model="product.bookName" placeholder="Enter the Book Name" required><br>

<label for="category">Category:</label><br>
    <input type="text" v-model="product.category" placeholder="Enter category" required><br>

<label for="description">Description:</label><br>
    <input type="text" v-model="product.description" placeholder="Enter description" required><br>

<label for="img">Image:</label><br>
    <input type="text" v-model="product.img" placeholder="Add image url" required><br>

     <label for="img2">image 2:</label><br>
    <input type="text" v-model="product.img2" placeholder="img2" required><br>

<label for="price">Price:</label><br>
    <input type="number" v-model="product.price" placeholder="Enter price" required><br>

<label for="datereleased">Date Released:</label><br>
    <input type="date" id="date" v-model="product.datereleased" placeholder="Enter date of book released" required><br>

<label for="created_by">Created by:</label><br>
    <input type="text" v-model="product.created_by" placeholder="created_by" required><br>

   

    <button class="mt-4" @click="submit" data-bs-target="#exampleModal"  data-bs-dismiss="modal"
              aria-label="Close">update product</button>

</form>

        </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>
export default {
methods: {
    update() {
      return this.$store.dispatch("updateProduct", this.product);
    },
  },
}
</script>

<style>

</style>