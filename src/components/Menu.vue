<template>
    <header>
        <div class="header-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- Container wrapper -->
                <div class="container-fluid">
                    <!-- Toggle button -->
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <router-link to="/" class="logo">
                           <img src="/src/assets/images/Logo.png" width="150" height="50" alt="">
                        </router-link> 
                    </button>
                    <!-- Collapsible wrapper -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Navbar brand -->
                        <router-link to="/" class="logo">
                           <img src="/src/assets/images/Logo.png" width="150" height="50" alt="">
                        </router-link> 
                    <!-- Left links -->
                    </div>
                   
                    <!-- Right elements -->
                    <div class="d-flex align-items-center">

                    <!-- Notifications -->
                    <div class="dropdown">
                        <a class="text-reset me-3 hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <router-link to='/cart' >
                            <i class="bi bi-cart-fill" style="color: black;"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">
                                {{
                                    user.profile !== null 
                                    ?
                                        user.profile.cart !== null 
                                        ? 
                                        user.profile.cart.length
                                        : 
                                        0
                                    :0
                                }}
                                <span class="visually-hidden"></span>
                            </span>
                        </router-link>
                        </a>
                    </div>

                    <!-- Avatar -->
                    <div class="dropdown item" >
                        <div class="dropdown-toggle d-flex align-items-center hidden-arrow color" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <router-link to='/login' style="margin:0 7px;">
                                <i class="bi bi-person-circle"></i>
                                <span class="name-user" style="color: black;">
                                    {{
                                        user.profile !==null ? 
                                            user.profile.lastName !== "" 
                                            ? 
                                            user.profile.lastName 
                                            :
                                            ""  
                                        :
                                        ""
                                    }} 
                                </span>
                            </router-link>
                            </div>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" v-if='user.profile' @click='handelLogout()'>Đăng xuất</a>
                                <a class="dropdown-item" href="#">Thông tin cá nhân</a>
                                <a class="dropdown-item" href="#">Liên hệ</a>
                                </div>
                            </div>
                        </div>
                    <!-- Right elements -->
                </div>
            <!-- Container wrapper -->
            </nav>
            <!-- Navbar -->
        </div>

        <!-- navbar-menu------------------------>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 "
                    v-for='item in pageUrl'
                >
                    <li class="nav-item ">
                        <router-link :to='`/${item.url}`' class="nav-link" style="color: white;">{{item.name}}</router-link>
                    </li>
                </ul>
                <Search />
            </div>
        </nav>
        <div v-for='item in resultQuery'>
            <div>{{item}}</div>
        </div>
    </header>
</template>

<script>
    import  Search from '@/components/Search.vue'
    import { userStore } from '@/stores/userStore.js'
    import { productStore } from '@/stores/productStore.js'
    import API from '@/services/index.js'
    export default {
        data(){
            return {
                pageUrl : [
                    {url: 'phong-ngu', name: "Phòng ngủ"},
                    {url: "phong-an", name: "Phòng ăn"},
                    {url: "phong-khach", name: "Phòng khách"},
                    {url: "tu-go", name: "Tủ gỗ"},
                    {url: "cua-go", name: "Cửa gỗ"},
                ]
            }
        },
        setup(){
            const user = userStore()
            const product = productStore()
            return { user, product}
        },
        methods:{
            handelLogout(){
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('acceptToken');
                localStorage.removeItem('user');    
                this.user.profile = null
                this.user.carts = null
            }
        },
        components:{
            Search,
        }
    }
</script>

<style type="text/css">
.header-container {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.bi{
    font-size: 25px;
} 
.logo img{
    width: 100%;
    align-items: left;
    color: black;
}

.logo h1 {
    font-size: 30px;
    font-weight: 700;
    text-align: left;
    margin-left: 15px;
    margin-top: 6px;
    color: rgb(106, 110, 62);

}
.cart {
    text-align: right;
    text-decoration: none;
    color: black;
}

.cart i{
    text-align: right;
    padding-left: 25px;
    text-decoration: none;
    color: black;
}

.cart h1 {
    font-size: 18px;
    margin-top: 15px;
    text-decoration: none;
}
ul li a {
    font-size: 18px;
    font-weight: 400;
}    
a {
    color: black;
    text-decoration: none;
    text-shadow: 2px 2px 2px #ddd;  
}
a:hover,.logout:hover{
    color: black;
    text-shadow: 2px 2px 2px #aaa;
}
.position-absolute{
    font-size: 10px;
    color: white;
    font-weight: both;
}
.p-2{
    padding: 0.2rem!important;
}
.translate-middle{
    transform: translate(-80%,-0%)!important;
}

.logout{
    color: black;
    text-shadow: 2px 2px 2px #ddd;  
    cursor: pointer;
}

.nav-link{
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
    text-shadow: none;
    margin-left: 10px;
}

.position-absolute{
    /* margin-top: 12px;
    margin-left: -110px; */
    margin-left: -7.3%;
    margin-top: 0.5%;
}

.rounded-pill {
    margin-top: 5px;
    position: absolute;
    right: 5px;
    top: -4px;
}

.dropdown-menu {
    position: absolute;
    right: 5px;
}

.name-user {
    position: relative;
    right: -3px;
    top: -4px;
}

.name-user {
    font-weight: 500;
}

.d-flex {
    margin-right: 15px;
}

.form-control {
    width: 280px;
    margin-left: 10px;
    border-radius: 5px;
}

.btn-outline-success {
    color: #ffffff;
    border-color: #ffff;
}
@media only screen and (max-width: 420px) {
    header {
        width: 100%;
    }
   
}

@media screen and (min-width: 320px) {
    header {
        width: 100%;
    }
}
</style>
