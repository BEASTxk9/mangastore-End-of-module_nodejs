<template>
  <Navbar></Navbar>

<h1>Unlimited Void</h1>

  <div id="sec">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/xdwbgMZJ/monkey-d-luffy-manga-b-Gls-Z26-Um-Zqara-Wkp-JRob-Wllr-Wdma2-U.jpg" class="d-block " alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/KzmmZYkp/1000783.jpg" class="d-block" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/0211xQTY/4022340.png" class="d-block " alt="...">
    </div>
  </div>
</div>
</div>

</template>
    <!-- https://i.postimg.cc/xdwbgMZJ/monkey-d-luffy-manga-b-Gls-Z26-Um-Zqara-Wkp-JRob-Wllr-Wdma2-U.jpg 
    https://i.postimg.cc/KzmmZYkp/1000783.jpg
    https://i.postimg.cc/0211xQTY/4022340.png -->

<script>
import Navbar from '../components/NavView.vue'
export default {
  components: {

    Navbar,
    }}
 
</script>



<style scoped>
#sec{
  margin-top: 115px;
}

#quote-carousel .carousel-indicators .active 
{
  background: #333333;
}

/* End carousel */

.item blockquote {
    border-left: none; 
    margin: 0;
}

.item blockquote img {
    margin-bottom: 10px;
}

.item blockquote p:before {
    content: "\f10d";
    font-family: 'Fontawesome';
    float: left;
    margin-right: 10px;
}

img{
  height: 100vh;
  width: 250vh;
  object-fit: cover;
}

body{
  padding-top: 130px;
  
}






</style>