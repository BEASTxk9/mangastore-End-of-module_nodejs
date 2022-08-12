<template>
<div v-if="product">
<div class="container">
   <div class="row mx-auto">
    <div class="col-md-6">
        <div class="wrapper">
               
            <div class="book">
                <div class="book__cover">
                    <img id="img1" :src="product[0].img">
                    <div class="book__detail">{{ product[0].title }} {{ product[0].bookName }}</div>
                </div>
                <div class="book__page"><img :src="product[0].img2"></div>
            </div>
            <div class="shadow"></div>
                  
        </div>
    </div>
    <div class="col-md-6 mx-auto">
        <h2>{{ product[0].title }} {{ product[0].bookName }}</h2>
        <p>{{ product[0].description }}</p>
        <p>{{ product[0].category}}</p>
        <p>{{ product[0].datereleased}}</p>
    </div>
   </div>

</div>
</div>
</template>

<script>
export default {
  props: ["Product_id"],

mounted() {
    this.$store.dispatch("getproduct", this.Product_id)
  },
  computed: {
    product() {
      return this.$store.state.product
    }
  }

}
</script>

<style scoped>
#img1 {
    border-radius: 10px;
    width: 275px;
}

.main-content {
    margin: 2.5em auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}

h1 {
    width: 100%;
    margin: 0 auto 0.5em;
    font-size: 30px;
}

.wrapper {
    max-width: calc(100% / 4);
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

.book:hover {
    transform: rotateZ(8deg);
}

.book:hover .book__cover {
    transform: rotateY(50deg);
    z-index: 999;
    box-shadow: 20px 10px 50px rgba(0, 0, 0, 0.2);
}

.book__cover {
    height: 375px;
    width: 100%;
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 0 5px 1.5px rgba(0, 0, 0, 0.25);
    z-index: 10;
    transition: 0.5s linear;
    transform-style: preserve-3d;
    transform-origin: right center 0px;
    background-size: 180px 255px;
    /*    animation: 3s infinite alternate floating; */

}

.book__detail {
    background-color: rgba(51, 51, 51, 0.8);
    margin-top: 185px;
    padding: 15px;
    font-size: 12px;
    font-weight: 800;
    position: relative;
    top: -17rem;
    z-index: 10;
    color: #fff;
    text-align: left;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.book__page {
    height: 100%;
    width: 275px;
    position: absolute;
    background-color: #fbfae8;
    z-index: 0;
    box-shadow: 0 0 5px 1.5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
}

.book img {
    background-size: fit-content;
    width: 100%;
    height: 375px;

}

.shadow {
    height: 2px;
    display: block;
    margin: 15px auto;
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

/* @keyframes shadow {
	0% {
    width:180px;
  
		box-shadow:0px 10px 8px rgba(0,0,0,1);
	}
	50% {
    width:150px;
		box-shadow:0px 10px 8px rgba(0,0,0,.8);
	}
	100% {
    width:180px;
   padding-top:100px;
		box-shadow:0px 10px 8px rgba(0,0,0,1);
	} */

/* .book__page, .book .book:hover{
	 box-shadow: 8px 0px 2px  #222;
  
/*    border-left: 1px solid black; */
</style>