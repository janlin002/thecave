<template>
    <div>
        <Navbar></Navbar>
        <div class="jumbotron d-flex align-items-end">
        <h1 class="display-4 ml-5">結帳頁面</h1>
      </div>
        <div class="container pt-5 sticky-top">
            <div class="row">
                <div class="col-md-6">
                    <!-- 左側產品資訊 -->
                    <div class="my-5 justify-content-center">
                    <div class="my-5 justify-content-center">
                        <h1 class="pb-4">已選購產品：</h1>
                    <table class="table">
                        <thead>
                        <th></th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                        </thead>
                        <tbody>
                        <tr v-for="item in cart.carts" :key="item.id">
                            <td class="align-middle">
                            <button
                                type="button"
                                class="btn btn-outline-danger btn-sm"
                                @click="removeCartItem(item.id)"
                            >
                                <i class="far fa-trash-alt"></i>
                            </button>
                            </td>
                            <td class="align-middle">
                            {{ item.product.title }}
                            <div class="text-success" v-if="item.coupon">
                                已套用優惠券
                            </div>
                            </td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle">{{ item.final_total }}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">總計</td>
                            <td class="text-right">{{ cart.total }}</td>
                        </tr>
                        <tr v-if="cart.final_total !== cart.total">
                            <td colspan="3" class="text-right text-success">折扣價</td>
                            <td class="text-right text-success">{{ cart.final_total }}</td>
                        </tr>
                        </tfoot>
                    </table>
                    <div class="input-group mb-3 input-group-sm">
                        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
                        <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">套用優惠碼</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-6">
                    <!-- 右側個資 -->
                    
                    <div class="my-5 row justify-content-center">
                    <validation-observer class="col-md-9" v-slot="{ invalid}">
                    <form  @submit.prevent="createOrder">
                    <h1>個人資料填寫：</h1>
                    <validation-provider rules="required|email" v-slot="{ errors ,classes}">
                    <div class="form-group">
                        <label for="email">Email</label>
                    <input id="email" type="email" name="email" v-model="form.user.email"
                        class="form-control" :class="classes" style="width:100%">
                    <!-- 錯誤訊息 -->
                    <span  class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                    <!-- 輸入框 -->
                    
                </validation-provider>
                <validation-provider rules="required|alpha_spaces" v-slot="{ errors, classes }">
                    <!-- 輸入框 -->
                    <label for="username">收件人姓名</label>
                    <input id="username" type="text" name="name" v-model="form.user.name"
                    class="form-control" :class="classes">
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>


                    <validation-provider rules="required|alpha_num" v-slot="{ errors, classes }">
                    <!-- 輸入框 -->
                    <label for="usertel">收件人電話</label>
                    <input id="usertel" type="tel" name="tel" v-model="form.user.tel"
                    class="form-control" :class="classes">
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>

                <validation-provider rules="required|alpha_spaces" v-slot="{ errors, classes }">
                    <!-- 輸入框 -->
                    <label for="email">收件人地址</label>
                    <input id="useraddress" type="address" name="address" v-model="form.user.address"
                    class="form-control" :class="classes">
                    <!-- 錯誤訊息 -->
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>

                <div class="form-group">
                        <label for="comment">留言</label>
                        <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                    </div>


                <div class="text-right">
                    <button type="submit" class="btn btn-primary" :disabled="invalid">送出表單</button>
                </div>
                
                    </form>
                    </validation-observer>

                </div>
                </div>
            </div>
        </div>
                     
        </div>
</template>

<script>
import Navbar from './Navbar';
import $ from 'jquery';
export default {
    components:{
        Navbar,
    },
  data(){
    return{
      products:[],
      product:{},
      isLoading:false,
      cart:{},
      coupon_code: '',
      status: {
        loadingItem: ""
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message:'',
        email: '',
      password: ''
    }
    }
  },
  methods:{
     getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
      });
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
      getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.cart = response.data.data;
        console.log(response);
        vm.isLoading = false;
      });
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
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then(response => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if (response.data.success) {
              vm.$router.push(`/checkout/${response.data.orderId}`);
            }
            // vm.getCart();
            vm.isLoading = false;
          });
    },
    submitForm() {
      console.log('送出表單')
    },
    
  },
  created(){
    this.getProducts();
    this.getCart();
  }
}
</script>

<style scoped>
.jumbotron{
    background-image: url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: top center;
    min-height:350px;
    color:white;
}
</style>