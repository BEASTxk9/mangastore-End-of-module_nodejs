import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
// mangastoreurl
const mangastoreurl = "https://mangastore-end-of-module.herokuapp.com/";

export default createStore({
  state: {
    users: null,
    products: null,
    errMsg: null,
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },

    setproducts(state, values) {
      state.products = values
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
        .then((json) => context.commit("setUser", json));
    },

// login
    login: async(context, payload) => {
      const { fullname, email, password, userRole, phone_number, join_date } = payload;
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
      } else {
        this.errMsg = `
        error`
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
        .then((response) => response)
        .then((json) => context.commit("setproducts", json.data));
        router.push({name: "admin"})
      }catch(e) {
      console.log(e);
    }
    },

  },
  modules: {
  }
})
