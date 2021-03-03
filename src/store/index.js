import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

import VueAxios from 'vue-axios'

import { gettAPI } from '../api3/axios-base'
Vue.use(Vuex) 
Vue.use(VueAxios, axios)
const store = new Vuex.Store({
    state: {
        backendUrl: "http://127.0.0.1:8000/api/v1",
        allsearch:'',
        cart:[],
        products:[],
        userid: '',
        sifr:2,
        apiLike:[],

     
        password:'',
        accessToken: localStorage.getItem('accessToken') || '',
        refreshToken: null,
        profile:[],
        nameuserNew:[],
        apiData:[],
        likeID:'',
        first_name:'',
        last_name:'',
        phone:'',
        idCart:[]

        
    }, 


    actions: {

        userLogin (context, usercredentials) {
          return new Promise((resolve, reject) => {
            gettAPI.post('/api-token/', {
              username: usercredentials.username,
              password: usercredentials.password
            })
              .then(response => {
                context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh }) 
                resolve()
              })
              .catch(err => {
                reject(err)
              })
          })
        },



        userLogout (context) {
          if (context.getters.loggedIn) {
              context.commit('destroyToken')
          }
        },
        dataLike({state}){
          axios
            .post('http://127.0.0.1:8000/api/v1/customers/', { headers: { Authorization: 'Bearer '+ state.accessToken } })
            .then(response=>{state.sifr=response.data.data.[0].likecus} )
            
          

        },



        
        saveProfile({commit,state}){
              axios
                .get('http://127.0.0.1:8000/api/v1/customers/', { headers: { Authorization: 'Bearer '+ state.accessToken } })
                .then(response=> response.data.data)
                .then(nameuserNew => {
                commit('updateProfile', nameuserNew)
              })

          },
          Likelike({commit,state}){
              axios
                .get('http://127.0.0.1:8000/api/v1/customer/like/', { headers: { Authorization: 'Bearer '+ state.accessToken } })
                .then(response=> response.data)
                .then(likeNew => {
                commit('updateLike', likeNew)
              })

          },


        loginUser (context, credentials) {
          return new Promise((resolve, reject) => {
            // send the username and password to the backend API:
            gettAPI.post('/api/token/', {
              username: credentials.username,
              password: credentials.password
            })
            // if successful update local storage:
              .then(response => {
                context.commit('updateLocalStorage', { access: response.data.access, refresh: response.data.data }) // store the access and refresh token in localstorage
                resolve()
              })
              .catch(err => {
                reject(err)
              })
          })
        },
       
        GET_SEARCH_VALUE_TO_VUEX({commit},value){
            commit('SET_SEARCH_VALUE_TO_VUEX',value)
        },
        //axios
          //  .post('http://127.0.0.1:8000/api/v1/customer/like/create', {headers: {'Content-Type': 'application/json'}})
          addToLike({ state },mds) {
            axios
            .post(`http://127.0.0.1:8000/api/v1/customer/like/create`, {'likeCustomer': state.userid, 'likeNEW': mds.id })
            .then(response => {console.log(response) ; })
            .catch(err => { console.error(err) })

            
            console.log(mds.id)
            console.log(state.userid)
          },
          addItemToCart({ commit }, mds) {
            commit("addToCart", mds);
          },
          removeItemFromCart({ commit }, id) {
            commit("removeFromCart", id);
          },
          addQty({ commit }, id) {
            commit("addQty", id);
          },
          reduceQty({ commit }, id) {
            commit("reduceQty", id);
          },
          emptyCart({ commit }) {
            commit("emptyCart");
          },



          

        
        

    },


    
    mutations: {
        updateLike(state,likeNew){
          state.apiLike      =  likeNew.[0].like;

        },


        
        updateProfile(state,nameuserNew) {
            state.nameuserNew  =  nameuserNew.[0].user.username;
            state.first_name      =  nameuserNew.[0].first_name;
            state.last_name      =  nameuserNew.[0].last_name;
            state.phone         =  nameuserNew.[0].phone;
            state.userid       =  nameuserNew.[0].id;
        },


        updateStorage (state, { access, refresh,apiData }) {
          state.accessToken = access
          state.refreshToken = refresh
          state.apiData=apiData
        },
        destroyToken (state) {
          state.accessToken = null
          state.refreshToken = null
          state.profile=null
          state.nameuserNew=null
        },
        SET_SEARCH_VALUE_TO_VUEX: (state,value) => {
            state.allsearch =value;

        },
        
        addLikeTo(state,mds){
          state.likeID      =  mds.id;

        },

        addToCart(state, mds) {
            const productInCart = state.cart.find((product) => product.id === mds.id);
            if (!productInCart) {
              state.cart.push({ ...mds, qty: 1 });
            } else {
              productInCart.qty++;
            }
          },
        removeFromCart(state, id) {
            state.cart = state.cart.filter((item) => item.id !== id);
          },
        addQty(state, id) {
            const productInCart = state.cart.find((product) => product.id === id);
            productInCart.qty++;
          },
        reduceQty(state, id) {
            const productInCart = state.cart.find((product) => product.id === id);
            if (productInCart.qty > 1) {
              productInCart.qty--;
            } else {
              state.cart.splice(state.cart.indexOf(productInCart, 1));
            }
          },
        emptyCart(state) {
            state.cart = []
          },
          cartID(state,mds) {
            const Cart = state.idCart.find(mds.id);
            Cart.qty++;
          },
        
        
        
    },
    

    
    
    modules: {
      

    },
    getters: {
        first_name (state) {
          return state.first_name
        },
        last_name (state) {
          return state.first_name
        },
        phone (state) {
          return state.first_name
        },

        
        nameAll (state) {
          return state.nameuserNew
        },
        loggedIn (state) {
          return state.accessToken != null
        },
        getServerUrl: state => {
            return state.backendUrl
        },
        SEARCH_VALUE: state => {
            return state.allsearch
        },
        cart: state =>{
            return state.cart
        },
        apiData:state =>{
            return state.apiData
        },
        
    },
    plugins: [createPersistedState()]
})

export default store
