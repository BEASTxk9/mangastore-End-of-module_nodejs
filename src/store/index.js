import { createStore } from 'vuex';
import axios from 'axios';
// Picknpay url
const picknpayUrl = "https://mangastore-end-of-module.herokuapp.com/";

export default createStore({
  state: {
    users: null,
    products: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },

    setproducts: (state, products) => {
      state.products = products
    },
  },
  actions: {
    // get users
fetchUsers: async (content) => {
  let res = await axios.post(picknpayUrl+"register", data);
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
        userRole,
        userole, 
        phone_number,
        join_date
      };
      let res = await axios.post(picknpayUrl+"register", data);
      let results = await res.data;
      console.log(results);
      if(results) {
        context.commit('setUsers', results);
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
  },
  modules: {
  }
})
