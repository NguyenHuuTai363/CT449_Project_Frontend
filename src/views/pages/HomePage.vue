<template>
	{{getProductAPI()}}
	<Pagination />
	<div class="khoangtrang"></div>

	<Layout21 />
	<div class="khoangtrang"></div>
	<LayoutImageContent />
	<div class="khoangtrang"></div>
	<div class="card-title-box row">
		<Cart class='col-4'/>
		<Cart class='col-4'/>
		<Cart class='col-4'/>
		<Cart class='col-4'/>
		<Cart class='col-4'/>
		<Cart class='col-4'/>
		<Cart class='col-4'/>
		<Cart class='col-4'/>
		<Cart class='col-4'/>
	</div>

</template>

<script>
	import API from '@/services/index.js'
	import Pagination from '@/components/Pagination.vue'
	import Cart from '@/components/Cart.vue'
	import Layout21 from '@/components/Layout21.vue'
	import LayoutImageContent from '@/components/LayoutImageContent.vue'
	export default {
		data(){
			return{

			}
		},
		methods:{
			getProductAPI(){
				API("get","/")
				.then((res)=>{
					//console.log(res)
				})
			}
		},
		components:{
			Pagination,
			Cart,
			Layout21,
			LayoutImageContent,
		}
	}
</script>

<style type="text/css">
.khoangtrang{
    margin: 1rem;
}
.card-title-box {
    align-items: center;
    justify-content: center;
}

</style>