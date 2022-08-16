<template>
  <Navbar></Navbar>
<div id="sec">

  <div class="back">
    <div class="container">
    <div class="landing">
      <br>
          <br>
          <br>
      <div class="row">
        <div class="col-sm-6 order-sm-0 pe-5">
          <div class="card">
            <img class=" img-fluid " id="img1" src="https://i.postimg.cc/B632dKgG/6786547-one-piece-4.jpg" alt="">
            <div class="shadow"></div>
          </div>
        </div>
        <div id="text" class="col-sm-6 order-sm-1 d-flex flex-column justify-content-center p-lg-5">
          <h1 class="text mx-auto">Unlimited Void</h1>
          <h2><u>Bringing Manga To You</u></h2>
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
  padding-top: 69px;
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
    background: rgba(209, 208, 208, 0.5);
border-radius: 10px;
box-shadow: 0 4px 30px rgba(205, 205, 205, 0.1);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(2.4px);
-webkit-backdrop-filter: blur(2.4px);
border: 0.5px solid rgba(203, 95, 160, 0.3);
 margin-left: 80px;
}
h2{
  font-size: 45px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: black;
  margin-bottom: 50px;
  padding: 2px;

}
#text{
    background: rgba(209, 208, 208, 0.5);
border-radius: 10px;
box-shadow: 0 4px 30px rgba(205, 205, 205, 0.1);
backdrop-filter: blur(2.4px);
-webkit-backdrop-filter: blur(2.4px);
border: 1px solid rgba(203, 183, 195, 0.3);
color:black;
}

.back{
  background-image: url("https://i.postimg.cc/xdwbgMZJ/monkey-d-luffy-manga-b-Gls-Z26-Um-Zqara-Wkp-JRob-Wllr-Wdma2-U.jpg");
  height: 92vh;
  width: 100%;

}
.text{
  color: rgb(203, 95, 160);
   background-color: black;
   width: 420px;
   padding: 5px;
   border-radius: 10px;
   font-size:50px;
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