<template>
    <div>
        <Navbar></Navbar>
        <div class="jumbotron  d-flex align-items-end">
        <h1 class="display-4 ml-5">服務項目</h1>
        
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';
export default {
    components:{
        Navbar,
        Footer
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
</style>