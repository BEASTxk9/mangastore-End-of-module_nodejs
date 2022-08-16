<template>
<Navbar></Navbar>
<div v-if="true" id="sec" class="container">
 
  <div id="contact">

      
          
     <section class="section pt-1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <div class="custom-form mb-sm-30">
                        <form method="post" action="https://formspree.io/f/xdobyzlo" name="myForm" onsubmit="return validateForm()">
                         <h1>We would love to hear from you</h1>
                            <p id="error-msg"></p>
                            <div id="simple-msg"></div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mt-2">
                                            <div class="form-group">
                                                <input name="name" id="name" type="text" class="form-control border rounded" placeholder="First Name :" required>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 pt-2">
                                            <div class="form-group">
                                                <input name="email" id="email" type="email" class="form-control border rounded" placeholder="Your email :" required>
                                            </div> 
                                        </div>
                                       
                                    </div>
                                </div>

                                <div class="col-lg-6 mt-2">
                                    <div class="form-group">
                                        <textarea name="comments" id="comments" rows="3" class="form-control border rounded" placeholder="Your Message :"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 text-center pt-3 pb-2">
                                    <input type="submit" id="submit" name="send" class="submitBnt btn btn btn-light rounded" value="Send Message" required> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
  padding-top: 130px;
}
.container{
    width: 700px
}
form{
    margin-bottom: 27rem;
    padding-top: 8rem;
}

#contact{
    /* background-color: maroon; */
    /* border: solid 5px maroon;
    border-radius: 10px; */
  

}

input{
          background: rgba(209, 208, 208, 0.5);
box-shadow: 0 4px 30px rgba(205, 205, 205, 0.1);
color: black;
}
/* form input[type=text] {
background-color:rgb(203, 95, 160);
}

form input[type=email] {
background-color:rgb(203, 95, 160);
}

form #comments{
background-color: rgb(203, 95, 160);
}
.text-light {
    color:#2c3e50 !important;
}
input{
   color: #2c3e50;
    background-color: rgb(203, 95, 160);
} */
@media (max-width: 321px) {
    .container{
        width: 280px;
       
    }
    #contact{
        margin-top: 400px;
        margin-bottom: 10px;
        padding: -50px;
    }
}
@media (max-width: 426px) {
    .container{
        width: 280px;
       
    }
    #contact{
        margin-top: 400px;
        margin-bottom: 10px;
        padding: -50px;
    }
}
</style>