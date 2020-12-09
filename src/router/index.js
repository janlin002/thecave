import Vue from 'vue';
import VueRouter from 'vue-router';


import Login from '@/components/backed/Login';
import Dashboard from '@/components/backed/Dashboard';
import Products from '@/components/pages/Products';
import Main from '@/components/Front/Main';
import AboutUs from '@/components/Front/AboutUs';
import Traffic from '@/components/Front/Traffic';
import Server from '@/components/Front/Server';
import CustomerOrder from '@/components/pages/CustomerOrder';
import Coupon from '@/components/pages/Coupon';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'login',
        },
        {
            path:'/main',
            name:'主要頁面',
            component:Main
        },
        {
            path:'/about',
            name:'關於我們',
            component:AboutUs
        },
        {
            path:'/server',
            name:'服務項目',
            component:Server
        },
        {
            path:'/traffic',
            name:'交通方式',
            component:Traffic
        },
        {
            name:'後台登入',
            path:'/login',
            component:Login
        },
        {
            name:'後台',
            path:'/admin',
            component:Dashboard,
            children:[
                {
                    path:'products',
                    name:'後台產品',
                    component:Products,
                    meta: { requiresAuth: true },
                },
                {
                    name:'優惠碼',
                    path:'/coupon',
                    component:Coupon
                },
            ]
        },
        {
            name:'後台',
            path:'/',
            component:Dashboard,
            children:[
                {
                    path:'customer_order',
                    name:'模擬訂單',
                    component:CustomerOrder,
                },
                {
                    path:'customer_checkout/:orderId',
                    name:'送出訂單',
                    component:CustomerCheckout,
                }
            ]
        }
    ]
})