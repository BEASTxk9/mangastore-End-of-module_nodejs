<template>
  <Navbar></Navbar>
  <section id="admin">
    <div id="con" class="container" v-if="products">
      <!-- nav -->
      <div class="row justify-content-center pt-3">
        <!-- ___________ -->
        <div id="table" class="col-sm-1 mb-1">
          <h1 class="fs-5 pt-4">ADMIN</h1>
        </div>
        <!-- __________ -->
        <div id="table" class="col-sm-2">
          <addproduct></addproduct>
        </div>
        <!-- _________ -->
        <div id="table" class="col-sm-9 d-flex justify-content-end">
          <img src="https://i.postimg.cc/zDx3C6R9/logo.jpg" class="img-fluid  " style="height:50px;">
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
                <td class="px-3">{{ product.Product_id }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.bookName }}</td>
                <td>
                  <img
                    class="rounded text-center justify-content-center mx-1"
                    :src="product.img"
                    alt=""
                    defer
                  />
                </td>
                <td>{{ product.category }}</td>
                <td id="description">"{{ product.description }}"</td>
                <td>R{{ product.price }}</td>
                <td>{{ product.datereleased }}</td>
                <td>{{ product.created_by }}</td>
                <td>
                 
                    <button id="delete" class="b btn-layout" v-on:click="$store.dispatch('deleteProduct', product.Product_id)">
                      <i class="fa-solid fa-trash"></i>
                    </button>

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
import addproduct from "../components/AddProductView.vue";
import Navbar from "../components/NavView.vue";
export default {
  components: {
    addproduct,
    Navbar,
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  // data() {
  //   return {
  //         title: "",
  //       bookName: "",
  //       category: "",
  //       description: "",
  //       img: "",
  //       price: "",
  //       datereleased: "",
  //       created_by: "",
  //       img2: "",
  //   };
  // },
  // methods: {
  //   deleteProduct() {
  //     this.$store.dispatch("deleteProduct", {
  //    title: this.title,
  //     bookName: this.bookName,
  //     category: this.category,
  //     description: this.description,
  //     img: this.img,
  //     price: this.price,
  //     datereleased: this.datereleased,
  //     created_by: this.created_by,
  //     img2: this.img2,
  //     });
  //   },
  // },
};
</script>

<style scoped>
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
  padding: 5px;
  border-top: none;
  border-left: 0.3px solid rgba(128, 128, 128, 0.282);
  border-right: 0.3px solid rgba(128, 128, 128, 0.282);
}

img {
  height: 10vh;
}

#description {
  font-size: 13px;
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
  box-shadow: 12px 31px 37px rgba(255, 255, 255, 0.5);
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
}

.btn-layout:hover {
  color: rgb(255, 255, 255);
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7);
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

#delete{
  font-size: 1.5rem;
}
</style>
