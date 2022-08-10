<template>

<button data-bs-toggle="modal"
          data-bs-target="#exampleModal">ADD PRODUCT</button>


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
            <h5 class="modal-title" id="exampleModalLabel">ADD PRODUCT FORM</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
              
                   <div class="col-sm-8">

<form action="https://mangastore-end-of-module.herokuapp.com/products" method="POST">

    <input type="text" v-model="title" placeholder="title" required><br>

    <input type="text" v-model="bookName" placeholder="bookName" required><br>

    <input type="text" v-model="category" placeholder="category" required><br>

    <input type="text" v-model="description" placeholder="description" required><br>

    <input type="text" v-model="img" placeholder="img" required><br>

    <input type="number" v-model="price" placeholder="price" required><br>

    <input type="text" v-model="datereleased" placeholder="datereleased" required><br>

    <input type="text" v-model="created_by" placeholder="created_by" required><br>

    <button type="submit">Add product</button>

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

}
</script>

<style>

</style>