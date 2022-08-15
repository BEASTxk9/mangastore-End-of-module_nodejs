<template>
    <nav class="navbar navbar-light  fixed-top">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Offcanvas dark navbar</a> -->
    <router-link class="b btn-layout" to="/">Home</router-link> 
    <router-link class="b btn-layout" to="/landing">Landing</router-link> 
    <router-link class="b btn-layout" to="/about">About</router-link> 
    <router-link class="b btn-layout" to="/store">Shop</router-link> 
    <router-link class="b btn-layout" to="/admin">Admin</router-link> 
    <router-link class="b btn-layout" to="/contact">Contact</router-link>

	<!-- cart stuff -->
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
	
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</template>


<script>
export default {

}
</script>

<style scoped>
nav {
  padding: 30px;
 
}

nav a {
  font-weight: bold;
  color: #2c3e50;
   text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(203,95,159);
}

.offcanvas{
	margin-left: 1rem;
}


/* button */
.b:before{
  text-align: center;
    transition: all 0.3s ease-in-out;
	content: ""; 
	width: 0; 
	height: 100%; 
	position: absolute; 
	/* background-color: rgb(0, 0, 0); */
  border-bottom: 3px solid black;
	/* color: rgb(255, 255, 255); */
	left: 0; 
	top: 0; 
	transition: 0.3s;
	-webkit-transition: 0.3s;
	-moz-transition: 0.3s;
	-ms-transition: 0.3s;
	-o-transition: 0.3s; 
	z-index: -1;
}

.b:hover:before{
	/* color: rgb(255, 255, 255); */
    box-shadow: 12px 31px 37px rgba(255, 255, 255, 0.5);
	width: 100%; 
	left: auto; 
	right: 0;
  
}

.btn-layout{	
  text-align: center;	
	display: inline-flex;
	margin: 0 5px 0 0;		
	position: relative;
	opacity: 0.999;
	padding: 5px 5px;		
	text-align:center;
	color: rgb(0, 0, 0);
	/* border-radius:3px;		 */
	border: none;
	-moz-transition: 0.3s;
	-ms-transition: 0.3s;
	-o-transition: 0.3s;
	-webkit-transition: 0.3s;
    transition: 0.3s;
	overflow:hidden; 
}

.btn-layout:hover{
    /* color: rgb(255, 255, 255); */
  transition: all 0.5s ease-in-out;
 /* box-shadow: 0px 0px 50px 3px rgba(0, 206, 255, 0.7); */
}

</style>