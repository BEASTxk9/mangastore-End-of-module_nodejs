<template>
<Navbar></Navbar>
<div v-if="true" id="sec" class="container">
  <h1>We would love to hear from you</h1>
  <div>
    
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
</template>

<script>
import Navbar from '../components/NavView.vue'
export default {
  components: {
  
  Navbar
}
}
</script>

<style scoped>

</style>