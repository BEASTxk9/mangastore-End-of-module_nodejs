<template>
  <Navbar></Navbar>
  <div id="sec" class="container">
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
}
</script>

<style scoped>
#sec{
  margin-top: 130px;
}
</style>