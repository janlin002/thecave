<template>
    <div>
        <Navbar></Navbar>
        <div class="jumbotron  d-flex align-items-end">
        <h1 class="display-4 ml-5">交通方式</h1>
      </div>

      <div class="container pt-5 text-center">
          <div class="row">
              <div class="col-sm-6 d-flex justify-content-center align-items-center">
                  <div>
                    <h5><i><b>自行開車</b></i></h5>
                    <br>
                    <p>下大直橋引道之後，美麗華在左前方方向</p><hr>
                        
        
                        <h5><i><b>捷運</b></i></h5>
                        <br>
                        <p>搭乘捷運文湖線至「劍南路站」，3號出口出站即可抵達美麗華百樂園。
                        </p><hr>
                        
        
        
                        <h5><i><b>停車場</b></i></h5>
                        <br>
                        <p>停車場位於B2、B3，共745個停車位<br>
                        停車營業時間：11:00~22:00
                        </p><hr>
                        
                  </div>
                
              </div>
              <div class="col-sm-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40476.9465646434!2d121.56067872348953!3d25.06076188818819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac12f6cf7d73%3A0x4d733f290725ce21!2zTWlyYW1hcue-jum6l-iPr-aRqeWkqei8qg!5e0!3m2!1szh-TW!2stw!4v1605355391812!5m2!1szh-TW!2stw" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer'
export default {
    components:{
        Navbar,
        Footer
    }
}
</script>

<style scoped>
    .jumbotron{
    background-image: url(https://images.unsplash.com/photo-1515378866965-f80dcd891c7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80);
    background-size: cover;
    background-position: top center;
    min-height:350px;
    color:white;
}
.ftphoto{
  max-width: 100px;
}
</style>