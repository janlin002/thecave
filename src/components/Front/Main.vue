<template>
    <div>
        <Navbar></Navbar>
        <Content></Content>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
export default {
    components:{
        Navbar,
        Content,
        Footer

    }
}
</script>