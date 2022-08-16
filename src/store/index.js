import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
// mangastoreurl
const mangastoreurl = "https://mangastore-end-of-module.herokuapp.com/";

export default createStore({
  state: {
    users: null,
    products: null,
    product : null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },

    setproduct(state, product) {
      state.product = product
    },

    setproducts: (state, vaule) => {
      state.products = vaule
    },
  },
  actions: {

// register
register: async(context, payload) => {
  const { fullname, email, password, userRole, phone_number, join_date } = payload;
  await fetch(mangastoreurl+"register", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      password: password,
      userRole: userRole,
      phone_number: phone_number,
      join_date: join_date
    }),
  })
    .then((response) => response.json())
    .then((json) => context.commit("setUser", json), alert(`Your Registration was Successfull. Welcome!`));
},

// login
login: async(context, payload) => {
  const {  email, password } = payload;
  let result = await fetch(mangastoreurl+"login", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  if(result){
    router.push({name: "landing"})
    alert('Welcome')
  } else {
    alert('Password or Email is wrong. Please try again.')
    router.push({name: "home"})
  }
},

// _______________
// get products
getproducts: async (context) => {
  let res = await fetch('https://mangastore-end-of-module.herokuapp.com/products');
  let data = await res.json();
  let result = data.results;
  if(result){
    context.commit('setproducts', result)
  }else{
    console.log('loading...')
  }
},

// get single product  
getproduct: async (context, Product_id) => {
  // Product_id = 1
  fetch('https://mangastore-end-of-module.herokuapp.com/products/' + Product_id)
  .then((res) => res.json())
  .then((data) =>{
  console.log(data)
    context.commit("setproduct", data.results);
  })
},

 // add product
 addProduct: async(context, payload) => {
  const {title, bookName, category, description,img,price,datereleased,created_by, img2 } = payload;
  
  try{
    await fetch(mangastoreurl+"products", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title : title,
       bookName : bookName,
       category : category,
       description : description,
      img : img,
      price : price,
      datereleased : datereleased,
      created_by : created_by,
       img2 : img2
    }),
  })
    .then((response) => response.json)
    .then((json) => context.commit("setproducts", json.data));
    router.push({name: "admin"});
    
  }catch(e) {
  console.log(e);
}
},

// delete product
deleteProduct: async (context, Product_id) => {
  fetch("https://mangastore-end-of-module.herokuapp.com/products/" + Product_id, {
    method: "DELETE",
  }) 
  .then((res) => res.json())
  .then(() => context.dispatch('getproducts'), alert('Delete was successfull! Refresh the page.'));
},

// updates list
    updateProduct: async (context, product) => {
      // fetch("http://localhost:3000/products/" + product.id, {
      fetch("https://mangastore-end-of-module.herokuapp.com/products/" + product.Product_id, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getProducts");
        });
    },

  },
  modules: {
  }
})
