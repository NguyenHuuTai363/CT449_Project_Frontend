<template>
    <div class="cart col-4">
        <div class="content">
                <router-link to='/detail'>
                    <img v-bind:src="item.image" class="card-img-top" alt="..." />
                </router-link>
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <div class="row">
                        <div class="col-10">
                            <div class="card-content col-10">Price: {{item.price}}</div>
                            <div class="card-content col-10">Discount: {{item.discount*100}}%</div>
                        </div>
                        <div class="col-2"><i class="bi bi-cart-fill"></i></div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
    import h1 from'@/assets/images/cua_go.jpg'
	export default {
        props:['product'],
        data(){
            return{
                item: this.product,
                ima1: h1,
                ima: '/src/assets/images/cua_go.jpg',
            }
        },
        setup(){
        },
        methods:{
        },
    }
</script>
<style type="text/css" scoped>

</style>