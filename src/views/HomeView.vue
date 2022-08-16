<template>

 <section id="header" class="showcase w-100" defer>
    <!-- background-vid -->
<div class="video-container">
<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;" autoplay><iframe src="https://streamable.com/e/hagqfi?autoplay=1&nocontrols=1" frameborder="0" allowfullscreen autoplay loop allow="autoplay loop" style="position:absolute;left:0px;top:0px;overflow:hidden;" defer></iframe></div>
  

  
	</div>
<!-- data -->
<div id="data" class="container">
   <div id="login_register">
     <!-- type writer -->
    <div class="container typewriter-container">
      <transition name="fade" appear>
        <h1 class="typewriter-text mt-1">
          Welcome<br>
        </h1>
      </transition>
    </div>

     <button 
            class="btn text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            OPEN
          </button>
    <div class="container">

      <div id="toggle" class="row justify-content-center">
        <!-- register -->
        <div class="col-sm-12 col-md-5 mx-1">

          <div class="collapse" id="collapseExample">
            <div id="card" class="card card-body">
              <registerform></registerform>
            </div>
          </div>
        </div>

        <!-- login -->
        <div id="login" class="col-sm-12 col-md-5 mx-1">
          <div class="collapse" id="collapseExample">
            <div id="card" class="card card-body">
              <loginform></loginform>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

    
  </section>


 
</template>

<script>
import registerform from "../components/RegisterFormView";
import loginform from "../components/LoginFormView.vue";

export default {
  components: {
    registerform,
    loginform,
  },
};
</script>

<style scoped>
body {
  overflow-x: none;

}
body{
  padding-top: 130px;
}

#login_register {
  padding-bottom: 17.5vh;
  padding-top: 1.5rem;
}

#toggle{
  transition: all 0.3s ease-in-out;
}

#card {
      background: rgba(209, 208, 208, 0.5);
box-shadow: 0 4px 30px rgba(205, 205, 205, 0.1);
  border: 0.5px solid grey;
  border-radius: 10px;
  gap: 10px;
  padding-top: 5px;
  height: 66vh;
}

.btn{
  background-color: rgb(203,95,159);
  margin-bottom: 10px;
}



.typewriter-text{
  font-size: 5rem;
  color: rgb(238, 238, 238);
}

/* landing */
.showcase {
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.video-container {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    overflow: hidden;
}

iframe{
margin-top: -10vh;
height: 100%;
width: 100%;
}

.video-container{
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

.video-container:after {
    content: '';
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
}


@media screen and (max-width: 500px) {
  .typewriter-text{
  font-size: 3rem;
}
 }

 @media screen and (max-width: 767.3px) {
  #login{
  margin-top: 10px;
}

.collapse{
position: relative;
top: 6rem;
}

 input{
  width: 70%;
 }
 }



 @media only screen and (max-width: 1250px) {



  iframe{
    width: 400%;
    height: 400%;
  }
}
</style>
