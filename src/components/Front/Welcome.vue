<template>
    <div>
      <img  class="main-photo" src="https://images.unsplash.com/photo-1522968941782-e27ac665baa3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="">
        <div class="text-center background">
            <img src="" alt="" class="mt-5">
            <h1 class="mt-5">您好，歡迎光臨!</h1>
            <router-link href="#" to="/main" class="btn btn-outline-dark mt-2">進入選購</router-link><br>
            <router-link to="/login" class="btn btn-outline-danger mt-2">後台管控</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="">
.main-photo{
  width: 100%;
  max-height: 800px;
  background-size: cover;
  background-position: center center;
  position: relative;
}
.background{
  position: absolute;
}
</style>