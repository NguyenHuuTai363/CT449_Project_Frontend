<template>

	<div 
		class="card-title-box container-fluid " 
		v-for='item in product.listItem'
	>
		<Card class='card' :product='item' v-if='item.kind === this.$route.params.slug'/>
	</div>
</template>

<script>
	import Card from '@/components/Card.vue'
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
			Card,
		},
		methods:{
			getNamePage(){
				return this.$route.params.slug
			},
		}
	}
</script>

<style type="text/css" scoped>
/*.card{
	float: left;
}*/
.card-title-box{
	display: flex;
}
</style>