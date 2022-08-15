<template>
    <div class="container" v-if="products">
        <div class="row">
            <div class="col-sm-3 p-0" v-for="(product, index) in products" :key="index">
                <!-- <td>{{product.title}}</td>
    <td>{{product.bookName}}</td>
    <td></td>
    <td>{{product.category}}</td>
    <td id="description"></td>
      <td>R{{product.price}}</td> -->
                <!-- <img class="rounded text-center justify-content-center mx-1" :src="product.img" alt="" defer> -->
                <div class="wrapper">
                    <router-link :to="{ name: 'single', params: { Product_id: product.Product_id } }">
                        <div class="book">
                            <div class="book__cover">
                                <img id="img1" :src="product.img">
                                <div class="book__detail">{{ product.title }} {{ product.bookName }} - R{{product.price}}</div>
               
                            </div>
                            <div class="book__page"><img :src="product.img2"></div>
                        </div>
                        <div class="shadow"></div>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getproducts")
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    }
}
</script>

<style scoped>

#img1 {
    border-radius: 10px;
    width: 175px;
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
    /* margin: 0 auto 0.5em; */
    font-size: 30px;
}

.wrapper {
    /* max-width: calc(100% / 4); */
    min-width: 10em;
}

.book {
    height: 250px;
    width: 175px;
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
    height: 250px;
    width: 175px;
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
    width: 175px;
    position: absolute;
    background-color: #fbfae8;
    z-index: 0;
    box-shadow: 0 0 5px 1.5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
}

.book img {
    background-size: fit-content;
    width: 180px;
    height: 250px;

}

/* .shadow {
    height: 2px;
    display: block;
    margin: 15px auto;
    animation: 3s infinite alternate shadow;

} */

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
		box-shadow:0px 10px 8px rgba(0,0,0,1);
	} } */

/* .book__page, .book .book:hover{
	 box-shadow: 8px 0px 2px  #222;
  
/*    border-left: 1px solid black; */

/* } */
</style>