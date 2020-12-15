<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <Navbar></Navbar>
        <div class="jumbotron  d-flex align-items-end">
        <h1 class="display-4 ml-5">服務項目</h1>
        </div>

    <div class="container pt-5">
    <div class="row">
        <div class="col-md-3">
         <!-- 左側選單 -->
        <div class="list-group sticky-top " style="top:100px">
            <a href="#" class="list-group-item list-group-item-action"
              @click.prevent="searchText = ''"
              :class="{ 'active': searchText === ''}">
              全部顯示
            </a>
            <a class="list-group-item list-group-item-action"
               @click.prevent="searchText = item"
              :class="{ 'active': item === searchText}"
              v-for="item in categories" :key="item">
              {{ item }}
            </a>
          </div>
        </div>
       <!-- 子選單 -->
       <div class="col-md-9">
           <div class="row">
<div class="col-md-4 mb-4 " v-for="item in filterData" :key="item.id">
        <div class="card border-0 shadow-sm rounded" >
          <div style="height: 258px; background-size: cover; background-position: center" class="rounded"
          :style="{backgroundImage:`url(${item.imageUrl})`}"
            >
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a  href="#" class="text-dark">{{item.title}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <!-- 前者僅有顯示原價 -->
              <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
              <!-- 後者僅顯示原價+優惠價 -->
              <del class="h6" v-if="item.price">原價{{ item.origin_price }}</del>
              <div class="h5" v-if="item.price">特價{{ item.price }}</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm"
            @click="getProduct(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
            @click="addtoCart(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
              <i class="fas fa-cart-plus"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
           </div>
           
       </div>
      
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt />
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 5" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              <i class="fas fa-cart-plus"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
        <Footer></Footer>
    </div>
</template>

<script>
import $ from 'jquery';
import Navbar from './Navbar';
import Footer from './Footer';
export default {
    components:{
        Navbar,
        Footer
    },
    data(){
        return{
        // products:[],
        product:{},
        // isLoading:false,
        searchText:'',
        status:{
            loadingItem:'',
        }
        }
    },
    methods:{
    getProducts() {
      this.$store.dispatch('getProducts');
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then(response => {
        vm.product = response.data.product;
        $("#productModal").modal("show"); 
        console.log(response);
        vm.status.loadingItem = "";
      });
    },
    addtoCart(id,qty = 1){
      this.$store.dispatch('addtoCart',{id,qty});
      $("#productModal").modal("hide");
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    getUnique(){
      const vm=this;
      const categories=new Set();
      vm.products.forEach((item)=>{
        categories.add(item.category);
      });
      vm.categories=Array.from(categories);
    }
    },
    computed:{
        filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.products.filter((item) => {
          const data = item.category.toLowerCase().includes(vm.searchText.toLowerCase());
          return data;
        });
      }
      return this.products;
    },
    categories(){
      return this.$store.state.categories;
    },
    products(){
      return this.$store.state.products;
    },
    cart(){
      return this.$store.state.cart;
    },
    isLoading(){
        return this.$store.state.isLoading;
      },
    },
    created(){
        this.getProducts();
    }
}
</script>

<style scoped>
    .jumbotron{
    background-image: url(https://images.unsplash.com/photo-1602137933189-d119b2c45c26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2711&q=80);
    background-size: cover;
    background-position: center center;
    min-height:350px;
    color:white;
}
.active{
    background-color: black;
    color:white;
}
</style>