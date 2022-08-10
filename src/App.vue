<template>

<Nav></Nav>

  <router-view/>

 <footer>
  <div class="container py-1">
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <p>&copy; Made by Shane Stevens & Ikhlaas Rawoot.</p>
      </div>
    </div>
  </div>
 </footer>
 
</template>

<script>
import Nav from './components/NavView.vue';

export default{
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer{
  background-color: black;
  color: white;
}

/* scroll */
/* width */
::-webkit-scrollbar {
    width: 100%;
    background-color: transparent;
}
</style>
