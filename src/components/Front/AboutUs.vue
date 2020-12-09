<template>
    <div>
        <Navbar></Navbar>
        <div class="jumbotron  d-flex align-items-end" style="margin-bottom: 0;">
        <h1 class="display-4 ml-5">關於我們</h1>
      </div>

      <div class="container-fluid" style="padding: o;">
            <div class="row">
                <div class="col-sm-6  text-center d-flex justify-content-center align-items-center p-5" style="padding: 0;">
                    <div>
                      <h2>The Cave在做甚麼？</h2>
                      <hr>
                        <p>
                          The Cave不單單只是結合了Makerspace與Coworking space的新創空間，<br>
                          其真正核心價值是將有形的空間整合成無形的人脈。<br>
                          The Cave更提供完善的據點使不同國家的新創團隊互相交流，<br>
                          並且運用台灣「製造生態佳」的優勢及民間合作或政府活動交流作為聯結，<br>
                          讓不同團隊都能創造宣揚其品牌內涵與價值，激勵熱愛創新精神。<br>
                        </p>
                    </div>
                </div>
                <div class="col-sm-6" style="padding: 0;">
                  <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="">
                </div>
            </div>
        </div>
      

      <div class="container-fluid part2">
          <div class="row">
              <div class="col-sm-6" style="padding: 0;">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="">
              </div>
              <div class="col-sm-6  text-center d-flex justify-content-center align-items-center p-5" style="padding: 0;">
                <div>
                  <h2>為什麼選擇The Cave？</h2>
                  <hr>
                    <p>
                      The Cave將會是你的第二個家，<br>
                      讓你創業打拼的同時有一處可以放鬆休息的溫馨場所。<br>
                      我們的員工精通中英文，並盡力協助每一個會員的需求。<br>
                      The Cave提供的不僅僅只是Coworking Space，<br>
                      我們希望是成為有家的感覺的社群，溫馨且充滿人氣與交流。<br>
                    </p>
                </div>
              </div>
          </div>
        </div>

        <div class="container-fluid" style="padding: o;">
            <div class="row">
            <div class="col-sm-6  text-center d-flex justify-content-center align-items-center p-5" style="padding: 0;">
                <div>
                <h2>The Cave原則 -- 平價</h2>
                <hr>
                    <p>
                    以『平價』為首要目標。<br>
                    The Cave一直以來都是以簡單俐落又不失大方為形象<br>
                    絕對是以最平實的價格讓您租到一間最適合自己的辦公室<br>
                    只要您願意，世達團隊一定盡全力協助您擴展事業<br>
                    提供最專業的服務是我們的堅持<br>
                    讓您變得更專業是我們的使命。<br>
                    </p>
                </div>
                </div>
                <div class="col-sm-6" style="padding: 0;">
                <img src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" alt="">
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
.no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
.jumbotron{
    background-image: url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: top center;
    min-height:350px;
    color:white;
}
img{
    background-size: cover;
    background-position: top center;
    max-width: 100%;
}
@media (max-width: 768px) { 
    .part2{
        display: none;
    }
   }
.word{
    display: flex;
}
.ftphoto{
  max-width: 100px;
}
p{
    font-size: 15px;
}
    
</style>