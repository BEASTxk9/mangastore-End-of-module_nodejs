<template>

<button class="btn-layout b mt-3" data-bs-toggle="modal"
          data-bs-target="#exampleModal">ADD PRODUCT</button>


  <!-- Modal1 -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">ADD PRODUCT FORM</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row justify-content-center">
              
                   <div class="col-sm-8">

<form @submit.prevent="addProduct" method="POST">

<label for="title">Title</label><br>
    <input type="text" v-model="title" placeholder="Enter title" required><br>

<label for="bookName">Book Name:</label><br>
    <input type="text" v-model="bookName" placeholder="Enter the Book Name" required><br>

<label for="category">Category:</label><br>
    <input type="text" v-model="category" placeholder="Enter category" required><br>

<label for="description">Description:</label><br>
    <input type="text" v-model="description" placeholder="Enter description" required><br>

<label for="img">Image:</label><br>
    <input type="text" v-model="img" placeholder="Add image url" required><br>

     <label for="img2">image 2:</label><br>
    <input type="text" v-model="img2" placeholder="img2" required><br>

<label for="price">Price:</label><br>
    <input type="number" v-model="price" placeholder="Enter price" required><br>

<label for="datereleased">Date Released:</label><br>
    <input type="date" id="date" v-model="datereleased" placeholder="Enter date of book released" required><br>

<label for="created_by">Created by:</label><br>
    <input type="text" v-model="created_by" placeholder="created_by" required><br>

   

    <button class="mt-4" @click="submit" data-bs-target="#exampleModal"  data-bs-dismiss="modal"
              aria-label="Close">Add product</button>

</form>

        </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
data(){
    return{
        title : "",
           bookName : "",
           category : "",
           description : "",
          img : "",
          price : "",
          datereleased : "",
          created_by : "",
           img2 : "",
    }
},
methods: {
addProduct(){
this.$store.dispatch('addProduct', {
                 title : this.title,
           bookName : this.bookName,
           category : this.category,
           description : this.description,
          img : this.img,
          price : this.price,
          datereleased : this.datereleased,
          created_by : this.created_by,
           img2 : this.img2
            })

}
}
}
</script>

<style scoped>
/* button */
.b:before{
  text-align: center;
    transition: all 0.3s ease-in-out;
	content: ""; 
	width: 0; 
	height: 100%; 
	position: absolute; 
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
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
	color: rgb(255, 255, 255);
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
	border-radius:3px;		
	border: none;
	-moz-transition: 0.3s;
	-ms-transition: 0.3s;
	-o-transition: 0.3s;
	-webkit-transition: 0.3s;
    transition: 0.3s;
	overflow:hidden; 
}

.btn-layout:hover{
    color: rgb(255, 255, 255);
  transition: all 0.5s ease-in-out;
 box-shadow: 0px 0px 50px 3px rgb(203,95,159);
}

#date{
    width: 72%;
    padding-top: 3px;
    padding-bottom: 3px;
}

/* button{
  font-family: 'Titan One', cursive;
  font-weight: 500;
} */
</style>