<template>
    {{ log1() }}
    <header>
        <div class="header-container">
            <div class="row">
                <div class="col">
                    <router-link to="/" class="logo">
                        <h1>MEGA STORE</h1>
                    </router-link>
                </div>
                <div class="cart col-sm-1 col-lg-1">
                    <router-link to='/cart'>
                        <span  class="btn position-relative">
                          <i class="bi bi-cart-fill"></i>
                          <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">2
                            <span class="visually-hidden"></span>
                          </span>
                        </span>
                        
                    </router-link>
                </div>
                <div class="user col-sm-2 col-lg-1">
                    <router-link to='/login'>
                        <span  class="btn position-relative">
                            <i class="bi bi-person-fill"></i>
                            {{
                                user.profile !==null ? 
                                    user.profile.lastName !== "" 
                                    ? 
                                    user.profile.lastName 
                                    :
                                    "Anonymus"  
                                :
                                ""
                            }} 
                        </span>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- navbar-menu------------------------>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid">
                <a class="navbar-brand " href="# "></a>
                <button class="navbar-toggler " type="button " data-bs-toggle="collapse " data-bs-target="#navbarSupportedContent " aria-controls="navbarSupportedContent " aria-expanded="false " aria-label="Toggle navigation ">
                <span class="navbar-toggler-icon "></span>
              </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent ">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item ">
                            <router-link to='/home/phong-ngu' class="nav-link ">Phòng ngủ</router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link to='/home/phong-an' class="nav-link ">Phòng ăn</router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link to='/home/phong-khach' class="nav-link ">Phòng khách</router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link to='/home/tu-go' class="nav-link ">Tủ gỗ</router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link to='/home/cua-go' class="nav-link ">Cửa gỗ</router-link>
                        </li>
                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle " href="# " id="navbarDropdown " role="button " data-bs-toggle="dropdown " aria-expanded="false ">
                      Dropdown
                    </a>
                            <ul class="dropdown-menu " aria-labelledby="navbarDropdown ">
                                <li><a class="dropdown-item " href="# ">Action</a></li>
                                <li><a class="dropdown-item " href="# ">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider ">
                                </li>
                                <li><a class="dropdown-item " href="# ">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link disabled ">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex ">
                        <input class="form-control me-2 " type="search " placeholder="Search " aria-label="Search ">
                        <button class="btn btn-outline-success " type="submit ">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <!--  -->
    </header>
</template>

<script>
    import { userStore } from '@/stores/userStore.js'
    export default {
        setup(){
            const user = userStore()
            return { user, }
        },
        methods:{
            log1(){
                console.log("Helo",this.user.profile)
            }
        },
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
    /*line-height: 100%;*/
} 
.logo, {
    width: 100%;
    align-items: center;
    color: black;

    /* margin-top: 10px; */
}

.logo h1 ,{
    font-size: 35px;
    font-weight: 700;
    text-align: center;
}
.cart {
    text-align: right;
    padding-right: 25px;
    text-decoration: none;
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
a{
    color: black;
    text-decoration: none;
    text-shadow: 2px 2px 2px #ddd;  
}
a:hover{
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

</style>
