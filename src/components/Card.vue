<template>
    <div class="card">
        <div class="content">
                <router-link :to='`/detail/${item._id}`'>
                    <img v-bind:src="item.image" class="card-img-top" alt="item.image" />
                </router-link>
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <!--<div class="row"> -->
                        <div class="card-detail-content">
                            <div class="card-content ">Giá: {{formatPrice(item.price)}}</div>
                            <div class="card-content ">Giảm: {{item.discount*100}}%</div>
                            <div class="card-content ">Số lượng: {{item.quantity}}</div>
                        </div>
                        <div class="card-icons"><i class="bi bi-cart-fill" @click='addProductToCart(item)'></i></div>
                    <!-- </div> -->
                </div>
        </div>
    </div>
</template>

<script>
    import API from '@/services/index.js'
    import { userStore } from '@/stores/userStore.js'
    import shareMethods from '@/services/shareMethods.js'

	export default {
        props:['product'],
        data(){
            return{
                item: this.product,
            }
        },
        setup(){
            const user = userStore()
            return { user}
        },
        methods:{
            formatPrice(pri){
                return shareMethods.formatPrice(pri)
            },
            addProductToCart(item){
                if(!this.user.profile){
                    alert("Đăng ký trước khi sử dụng")
                    this.$router.push('/login')
                }else{
                    const { _id,cart } = this.user.profile
                    API('put',`/${_id}/cart`,{item})
                    .then((res)=>{
                        this.user.profile = res.data
                        localStorage.setItem('user', JSON.stringify(res.data));
                        // console.log(this.user.profile.cart)
                    }).catch((err)=>{
                        alert(err.response.data)
                    })                    
                }
    
            },
        },

    }
</script>
<style type="text/css" scoped>

.card {
    width: 100%;
    height: 350px;
    margin: 1.5rem 0;
    flex-grow: 0.5;
    flex-direction: column;
    align-items: center;
    border: 1px solid#e1dfdf;
    border-radius: 10px;
    margin: 20px;
    flex-wrap: wrap;
   
}

img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    object-position: center;
}
.card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
    border-top: 1px solid#f3f3f3;
}

.card-title {
   font-size: 15px;
   text-align: center;
   color: #727272;
}
.card-detail-content {
    width: 50%;
    position: relative;
    left: 5%;
    bottom: 9%;
}

.card-content {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    text-align: left;
}

.card-icons {
    display: flex;
    position: absolute;
    right: 10%;
    bottom: 17%;
    border-radius: 50%;

}
.card:hover {
    box-shadow: 3px 3px 30px rgba(0, 0, 0, .2);
}

@media only screen and (min-width: 625px) {
    html {
        font-size: 50%;
    }

    .container {
        width: 100%;
        display: grid;
        grid-template-columns: auto;
        align-content: center;
        justify-content: center;
        flex-direction: column;
    }

    .card-detail-content {
        flex-direction: column;
    }
 
}
@media only screen and (max-width: 980px) {
    html {
        font-size: 50%;
    }
    .card {
        height: 320px;
    }

    .card-icons {
        position: absolute;
        right: 10%;
        bottom: 15%;
    }
    .card-content {
        text-align: left;
    }
 
}

@media only screen and (max-width: 720px) {
    .card {
        height: 320px;
    }
    .card-icons {
        position: absolute;
        right: 10%;
        bottom: 15%;
    }
    
}
</style>