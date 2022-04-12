<template>

	<div 
		class="card-title-box container-fluid " 
		v-for='item in product.listItem'
	>
		<Cart class='card' :product='item' v-if='item.kind === this.$route.params.slug'/>
	</div>
</template>

<script>
	import Cart from '@/components/Cart.vue'
	import { productStore } from '@/stores/productStore.js'
	export default {
		data(){
			return {
				namePage: "",
			}
		},
		setup(){
			const product = productStore()
			return { product }
		},
		components:{
			Cart,
		},
		methods:{
			getNamePage(){
				return this.$route.params.slug
			},
		}
	}
</script>

<style type="text/css" scoped>

</style>