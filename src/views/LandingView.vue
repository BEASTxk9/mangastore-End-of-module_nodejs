<template>
  <Navbar></Navbar>
<div id="sec">
  <div class="back">
    <div class="container">
    <div class="landing">
      <br>
          <h1 class="text mx-auto">Unlimited Void</h1>
          <br>
      <div class="row">
        <div class="col-sm-6 order-sm-0">
          <div class="card">
            <img class="img-fluid " id="img1" src="https://i.postimg.cc/B632dKgG/6786547-one-piece-4.jpg" alt="">
            <div class="shadow"></div>
          </div>
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
  padding-top: 78px;
}
/* img{
  height: 100vh;
  width: 250vh;
  object-fit: cover;
} */

.card{
  width: 400px;
  height: 530px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(203, 95, 160, 0.83);
 
}

.back{
  background-image: url("https://i.postimg.cc/xdwbgMZJ/monkey-d-luffy-manga-b-Gls-Z26-Um-Zqara-Wkp-JRob-Wllr-Wdma2-U.jpg");
  height: 90vh;
  width: 100%;

}
.text{
  color: rgb(203, 95, 160);
   background-color: black;
   width: 380px;
   padding: 3px;
   border-radius: 10px;
}

#img1 {
    border-radius: 10px;
    width: 250px;
    height: 350px;
    margin: auto;
}

.main-content {
    margin: 2.5em auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}


p {
    font-family: 'Rye', cursive;
}

.wrapper {
    /* max-width: calc(100% / 4); */
    min-width: 10em;

}

.book {
    height: 375px;
    width: 275px;
    position: relative;
    transition: 0.4s ease-in-out;
    border-radius: 10px;
    transform-origin: left center 0px;
    display: inline-block;
    margin: 32px;
    perspective: 800px;
}

/* .book:hover {
   ;
} */

.book:hover .book__cover {
   
    box-shadow: 20px 10px 50px rgba(0, 0, 0, 0.2);
}

img{
  display:block;
  margin:20px auto 0px; 
  animation: 3s infinite alternate floating;
}
.shadow{
  height:2px;
  display:block;
  /* margin:15px auto; */
  animation: 3s infinite alternate shadow;
}

@keyframes floating {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
}
@keyframes shadow {
	0% {
    width:180px;
		box-shadow:0px 10px 8px rgb(0, 0, 0);
	}
	50% {
    width:150px;
		box-shadow:0px 10px 8px rgb(0, 0, 0);
	}
	100% {
    width:180px;
		box-shadow:0px 10px 8px rgb(0, 0, 0);
	}
}




</style>