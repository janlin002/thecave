import Vue from 'vue';
import VueRouter from 'vue-router';


import Login from '@/components/backed/Login';
import Dashboard from '@/components/backed/Dashboard';
import Products from '@/components/pages/Products';

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'*',
            redirect:'login',
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
                }
            ]
        }
    ]
})