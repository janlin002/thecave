import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
import $ from 'jquery';

Vue.use(Vuex);

//state模組區域變數
//actions,mutations,getters全域變數

export default new Vuex.Store({
    strict:true,
    state:{
        isLoading:false,
        products:[],
        categories:[],
        cart:{
            carts:[]
        }
    },
    actions:{
        // 操作行為
        // payload載荷
        updateLoading(context,status){
            context.commit('LOADING',status)
        },
        getProducts(context) { 
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
            context.commit('LOADING',true);
            axios.get(url).then(response => {
              context.commit('PRODUCTS',response.data.products);
              context.commit('CATEGORIES',response.data.products);
              console.log(response);
            //   this.getUnique();
              context.commit('LOADING',false);
            });
          },
          getCart(context) {
            // const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            context.commit('LOADING',true);
            axios.get(url).then(response => {
              if(response.data.data.carts){
                context.commit('CART',response.data.data);
              }
              console.log('取得購物車',response.data.data);
              context.commit('LOADING',false);
            });
          },
          addtoCart(context,{id, qty}) {
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const cart = {
              product_id: id,
              qty
            };
            axios.post(url, { data: cart }).then(response => {
              if(response.data.success){
                $("#productModal").modal("hide");
                context.dispatch('getCart');
                
              }
            });
          },
          removeCart(context,id){
              const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
              vm.$store.state.isLoading = true;
              this.$http.delete(url).then(response => {
                context.dispatch('getCart');
                // vm.getCart();
                console.log(response);
                vm.$store.state.isLoading = false;
              });
            }
    },
    mutations:{
        // 實際操作狀態，不能做非同步行為
        LOADING(state,status){
            state.isLoading=status;
        },
        PRODUCTS(state,payload){
            state.products=payload;
        },
        CATEGORIES(state,payload){
            const categories=new Set();
            payload.forEach((item)=>{
            categories.add(item.category);
            });
            state.categories=Array.from(categories);
        },
        CART(state,payload){
            state.cart=payload;
        }
    }
})