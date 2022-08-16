<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>Manga Catalogue</h1>
    <card></card>
  </div>
</template>

<script>
import card from '../components/ProductsCardView.vue';
import Navbar from '../components/NavView.vue'
export default {
components: {
  card,
  Navbar
},
mounted(){
  this.$store.commit('setproduct', null)
}
}
</script>

<style>
body{
  padding-top: 130px;
}
</style>