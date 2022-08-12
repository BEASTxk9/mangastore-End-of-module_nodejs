<template>

<Nav></Nav>

  <router-view/>

<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h5>Contact Us</h5>
        <ul class="list-inline social-icons">
            <li class="list-inline-item"><a href="https://www.facebook.com/jfpaintsza" target="_blank"><i class="fab fa-facebook-f fa-fw" aria-hidden="true"></i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/company/dulux-jf-paints/" target="_blank"><i class="fab fa-linkedin-in fa-fw" aria-hidden="true"></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/dulux_jfpaints/" target="_blank"><i class="fab fa-instagram fa-fw" aria-hidden="true"></i></a></li>
        </ul>
        <p class="contact-details"><strong>Address:</strong> 314 Imam Haron Road, Life Choices,<br> Landsdowne, 7777 <br>
          <strong>Telephone No:</strong> <a href="">021 545 547</a><br>
          <strong>Email:</strong> <a href="">reception@uv.co.za</a>
        </p>
        <img src="" class="cards">
      </div>
      <div class="col-md-3">
        <h5>Information</h5>
        <ul class="list-unstyled navigation">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Shop By Product</a>
            </li>
            <li>
              <a href="/stores">Find a Store</a>
            </li>
            <li>
              <a href="/blog">Ideas</a>
            </li>
            <li>
              <a href="/our-story">Our Story</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          <!--<li><a href="#">About</a></li>          -->
        </ul>
      </div>
      
      <div class="offset-md-3 col-md-3">
        <img src="https://i.postimg.cc/Fs8d1GdF/Logo-Sample-By-Tailor-Brands.png" class="img-fluid footer-logo">
        <p class="copyright">© Copyright Unlimited Void. Allrights reserved.<br>
          Website designed by Ikhlaas Rawoot & Shane Stevens.</p>
      </div>
    </div>
  </div>
</div>
 
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

/* footer{
  background-color: black;
  color: white;
} */
/* ///// */
.footer {
    padding: 50px;
    border-top: 1px solid #efefef;

}
li{
  padding-top: 18px;
}
.contact-details{
  font-size: 13px;
  display: flex;
  flex-direction: column;
}
</style>
