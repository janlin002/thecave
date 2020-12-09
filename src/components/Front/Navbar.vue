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
                <router-link to="/main" class="nav-link" href="#">Home</router-link>
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
                <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">聯絡我們</a>
                </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
                <i class="fas fa-shopping-cart fa-2x"></i>
            </form>
            </div>
        </nav>
        </header>
    </div>
</template>