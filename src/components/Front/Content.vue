<template>
    <div>
        <main role="main">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-item active img-1">
                <div class="container">
                <div class="carousel-caption text-left text-dark">
                    <h1>如果你在找一個私人的空間...</h1>
                    <p>免綁約,想租隨時都有位置</p>
                    <p><router-link to="/about" class="btn btn-lg btn-outline-dark" href="#" role="button">查看介紹</router-link></p>
                </div>
                </div>
            </div>
            <div class="carousel-item img-2">
                <div class="container">
                <div class="carousel-caption text-dark">
                    <h1>如果你在找CP值高的辦公室...</h1>
                    <p>價格絕對比同業便宜，且提供好吃的甜點</p>
                    <p><router-link to="/server" class="btn btn-lg btn-outline-dark" href="#" role="button">查看服務</router-link></p>
                </div>
                </div>
            </div>
            <div class="carousel-item img-3">
                <div class="container">
                <div class="carousel-caption text-right text-dark">
                    <h1>如果你還在猶豫方便性...</h1>
                    <p>地點就位在美麗華內，方便、好找</p>
                    <p><router-link to="/traffic" class="btn btn-lg btn-outline-dark" href="#" role="button">查看交通</router-link></p>
                </div>
                </div>
            </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>


        <div class="container text-center p-5">
            <img src="" alt="">
        </div>

        <div class="container marketing">

            <div class="row featurette">
            <div class="col-sm-6">
                <h3 class="featurette-heading">我們提供獨立的插座</h3>
                <h4 class="text-muted">是否都會擔心沒插座可用？</h4>
                <p class="lead">在 The Cave 不用擔心這個問題，因為每個座位都有安排自己的插座，再也不需要跟別人搶插座了!</p>
            </div>
            <div class="col-sm-6">
                    <img src="https://images.unsplash.com/photo-1552849787-524441312cec?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80" class="cphoto" alt="...">
            </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
            <div class="col-md-6 order-md-2">
                <h3 class="featurette-heading">我們提供了舒服的座位 </h3>
                <h4 class="text-muted">7D人體工學躺椅</h4>
                <p class="lead">對於長時間需再坐在椅子上的顧客，我們提供了最新技術的椅子，讓您在工作之餘也能顧慮到身體</p>
            </div>
            <div class="col-md-6">
                <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="cphoto" alt="">
            </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
            <div class="col-md-6">
                <h3 class="featurette-heading">我們供應咖啡店的服務 </h3>
                <h4 class="text-muted">咖啡，蛋糕</h4>
                <p class="lead">工作前來杯蒿喝的咖啡有助於提神，工作累後來片個蛋糕，有助於提深工作效率</p>
            </div>
            <div class="col-md-6">
                <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
                <img src="https://images.unsplash.com/photo-1536319229365-83318cdc7b83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" class="cphoto" alt="">
            </div>
            </div>

        <hr class="featurette-divider">
        <div class="container marketing">

            <!-- Three columns of text below the carousel -->
            <div class="row">
            <div class="col-lg-4">
                <img src="https://randomuser.me/api/portraits/women/17.jpg"  class="bighead mb-4" alt="">
                <h2>Mrs.Lian</h2>
                <p style="font-size: 17px;"> "能夠一直身處在明亮整潔的辦公室真的很棒，適合接待 500 間公司人員和客戶。"</p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <img src="https://randomuser.me/api/portraits/men/4.jpg"  class="bighead mb-4" alt="">
                <h2>Mr.Lin</h2>
                <p style="font-size: 17px;">"自從加入 The Cave 後，從來沒有員工轉職，The Cave 共同工作的文化有助我們招募員工。"</p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
                <img src="https://randomuser.me/api/portraits/women/35.jpg"  class="bighead mb-4" alt="">
                <h2>Mrs.Huang</h2>
                <p style="font-size: 17px;">"我們找過傳統辦公室，但 The Cave 更符合我們的需求，它可提供隨著我們組織成長而擴大規模的解決方案。"</p>
            </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->


            <hr class="featurette-divider">
        <div class="container-fulid">
            <div class="container mt-4">
            <div class="row">
                <div class="col-sm-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40476.9465646434!2d121.56067872348953!3d25.06076188818819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac12f6cf7d73%3A0x4d733f290725ce21!2zTWlyYW1hcue-jum6l-iPr-aRqeWkqei8qg!5e0!3m2!1szh-TW!2stw!4v1605355391812!5m2!1szh-TW!2stw" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>

                <div class="col-sm-6 mt-5 p-3 text-center d-flex justify-content-center align-items-center">
                <div>
                    <h1>聯絡我們</h1><hr>
                <p>電話：電話：0900-000-000</p>
                <p>E-mail:thecave@gmail.com</p>
                <p>地址：台北市內湖區</p>
                <p>開方時間：一到五，八點到下午七點（國定假日不開放）</p>
                </div>
                </div>

            </div>
            </div>
        </div>
        </div>
        </div>
        </main>
    </div>
</template>


<style scoped>
body {
    padding-top: 3rem;
    color: #5a5a5a;
    -webkit-font-smoothing: antialiased;

}
  
  .navbar-nav{
    color:black;
  }
  .bighead{
    border-radius: 50%;
    min-width: 150px;
  }
  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */
  
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
  }
  
  /* Declare heights because of positioning of img element */
  .carousel-item {
    height: 32rem;
  }
  .carousel-item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 32rem;
  }
  
  
  /* MARKETING CONTENT
  -------------------------------------------------- */
  
  /* Center align the text within the three columns below the carousel */
  .marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .marketing h2 {
    font-weight: 400;
  }
  .marketing .col-lg-4 p {
    margin-right: .75rem;
    margin-left: .75rem;
  }
  
  
  /* Featurettes
  ------------------------- */
  
  .featurette-divider {
    margin: 5rem 0; 
  }
  
  /* Thin out the marketing headings */
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.05rem;
  }
  
  
  /* RESPONSIVE CSS
  -------------------------------------------------- */
  
  @media (min-width: 40em) {
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }
  
    .featurette-heading {
      font-size: 50px;
    }
  }
  
  @media (min-width: 62em) {
    .featurette-heading {
      margin-top: 7rem;
    }
  }
  .img-1{
      background-image: url(https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80);
      background-size: cover;
      background-position: center center;
  }
  .img-2{
    background-image: url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: center center;
}
.img-3{
    background-image: url(https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: center center;
}
.cphoto{
    max-width: 100%;
    background-position: center center;
    background-size:cover;
}
</style>>
    
</style>