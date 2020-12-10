<template>
    <div>
    <header>
        <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
                <img src="@/assets/500cf256-2b0d-4c3a-9b9a-8bb4d7f8869d_200x200.png" style="max-width:40px" alt="">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#"><img src="" alt=""></a>
                </li>
                <li class="nav-item">
                <router-link to="/" class="nav-link" href="#">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/about" class="nav-link" href="#" tabindex="-1" aria-disabled="true">關於我們</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/server" class="nav-link" href="#" tabindex="-1" aria-disabled="true">服務項目</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/traffic" class="nav-link" href="#" tabindex="-1" aria-disabled="true">交通方式</router-link>
                </li>
            </ul>
            <div class="dropdown ml-auto">
        <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
          <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
          <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
          <!-- <span class="sr-only">unread messages</span> -->
        </button>

        <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px" data-offset="400" >
          <h6>已選擇商品</h6>
          <table class="table table-sm">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts.length">
                <td class="align-middle text-center">
                  <!-- <a href="#" class="text-muted" @click.prevent="removeCart(item.id)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </a> -->
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                <td class="align-middle text-right">{{item.total}}</td>
              </tr>
            </tbody>
          </table>
          <router-link aria-hidden="true" to="/cart" class="text-light">
          <button class="btn btn-primary btn-block">
            
            <i class="fa fa-cart-plus">結帳去</i>
          </button>
          </router-link> 
        </div>
      </div>
            </div>
        </nav>
        </header>
    </div>
</template>


<script>
import $ from 'jquery';
export default {
  data(){
    return {
      // cart:{
      //   carts:[]
      // }
    }
  },
  methods:{
    getCart() {
      // const vm = this;
      // const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      // vm.isLoading = true;
      // this.$http.get(url).then(response => {
      //   vm.cart = response.data.data;
      //   console.log(response);
      //   vm.isLoading = false;
      // });
      this.$store.dispatch('getCart',);
    },
    removeCart(id){
    // const vm = this;
    //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
    //   vm.$store.state.isLoading = true;
    //   this.$http.delete(url).then(response => {
    //     vm.getCart();
    //     console.log(response);
    //     vm.$store.state.isLoading = false;
    //   });
    this.$store.dispatch('removeCart',id);
    },
     removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(response => {
        vm.getCart();
        console.log(response);
        vm.isLoading = false;
      });
    },
  },
  computed:{
    cart(){
      return this.$store.state.cart;
    }
  }
  
  }
</script>
