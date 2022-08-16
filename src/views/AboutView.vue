<template>
  <Navbar></Navbar>
  <div v-if="true" id="sec" class="container">
    <div class="about">
          <h1>About Us</h1>
          <br>
      <div class="row">
        <div class="col-sm-6 order-sm-0">
          <img class="img-fluid" src="https://i.postimg.cc/L6yY0HV2/09yteykvyun21.gif" alt="">
        </div>
        <div id="text" class="col-sm-6 order-sm-1 d-flex flex-column justify-content-center p-lg-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro impedit sapiente, adipisci explicabo tempore
          optio a asperiores incidunt quasi vitae laudantium laboriosam libero in rerum distinctio facere debitis
          reiciendis
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vel cum blanditiis libero accusantium
          incidunt voluptate dignissimos, vero laboriosam commodi ullam velit est vitae numquam eos id expedita eius
          at!.50
        </div>
      </div>
    </div>
    <br>
    <div class="abt mx-auto">
      <h1>Why Choose Us?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum beatae tempore, quaerat impedit dolor earum id velit hic pariatur atque veniam inventore ex sit? Reiciendis aliquam sit quod voluptates accusantium.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor maiores ducimus iure consectetur? Repudiandae nobis, illo molestias tempora atque corrupti, aperiam placeat at nam sapiente possimus sed tenetur. Eum!</p>

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
#sec{
  margin-top: 130px;
}

img{
  width: 410px;
  /* height: 450px; */
   object-fit: cover;
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius:10px;
}
.container{
  margin-bottom: 80px;
  border-left: solid rgb(203,95,159);
  border-right: solid rgb(203,95,159);
}
 #text{
  letter-spacing: 1px;
  word-spacing: 5px;
}
.abt{
  width: 800px;

  
}
</style>
