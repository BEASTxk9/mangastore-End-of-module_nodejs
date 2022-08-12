import { createStore } from 'vuex';
import axios from 'axios';
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

    setproducts: (state, products) => {
      state.products = products
    },
  },
  actions: {
    // get users
fetchUsers: async (content) => {
  let res = await axios.post(mangastoreurl+"register", data);
  let {results } = await res.data;
  if(results) {
    content.commit('setUsers', results);
  }else{
    console.log("There is no data");
  }
},

    //Signup
    signUp: async (context, playload)=> {
      let {fullname, email,  password, userole, phone_number, join_date} = playload;
      const data = {
        fullname, 
        email, 
        password,
        userole,
        userole, 
        phone_number,
        join_date
      };
      let res = await axios.post("https://mangastore-end-of-module.herokuapp.com/register", data);
      let results = await res.data;
      console.log(results);
      if(results) {
        console.log('setUsers', results);
      }else {
        console.error("No dota");
      }
    },

// get products
    getproducts: async (context) => {
      let res = await fetch('https://mangastore-end-of-module.herokuapp.com/view-products');
      let data = await res.json();
      let result = data.results;
      if(result){
        context.commit('setproducts', result)
      }else{
        console.log('loading...')
      }
    },

    getproduct: async (context, Product_id) => {
      // Product_id = 1
      fetch('https://mangastore-end-of-module.herokuapp.com/view-products/' + Product_id)
      .then((res) => res.json())
      .then((data) =>{
      console.log(data)
        context.commit("setproduct", data.results);
      })
      // let res = await fetch('https://mangastore-end-of-module.herokuapp.com/view-products/' + Product_id);
      // let data = await res.json();
      // let result = data.results;
      // console.log(result)
      // if(result){
      //   context.commit('setproduct', result)
      // }else{
      //   console.log('loading...')
      // }
    },

  },
  modules: {
  }
})
