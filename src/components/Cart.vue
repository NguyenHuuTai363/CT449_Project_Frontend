<template>
	<div class="cart">
        <div class="content">
                <router-link to='/detail'>
                    <img src="@/assets/images/banner2.jpg" class="card-img-top" alt="..." />
                </router-link>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <div class="row">
                        <div class="col-10">
                            <div class="card-content col-10">Price: 500.000.000đ</div>
                            <div class="card-content col-10">Discount: 10%</div>
                        </div>
                        <div class="col-2"><i class="bi bi-cart-fill"></i></div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
	export default {}
</script>
<style type="text/css" scoped>
.cart{
}
.content{
    width: 98%;
    border: solid 1px #ddd;
    border-radius: 5px 5px 5px 5px;
    margin: 1rem auto;
}
.card-title, .card-content{
    text-align: left;
}
</style>