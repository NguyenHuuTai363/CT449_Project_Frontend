<template>
	<div class="container ">
		<div class="" v-for='item in product.listSearch'>
			<Card class='' :product='item' />
		</div>
		
	</div>
	<div class="container">
		<div v-for='item in getProductFromParams'>
			<Card 
				class='card' 
				:key='item._id' 
				:product='item' 
				v-if='item.kind === $route.params.slug'/>
		</div>
	</div>
</template>

<script>
	import Card from '@/components/Card.vue'
	import API from '@/services/index.js'
	import { productStore } from '@/stores/productStore.js'
	export default {
		data(){
			return {
				namePage: "",
				items: [],
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
		},
		computed:{
			getProductFromParams(){
				var items = []
				for (var i = 0; i < this.product.listItem.length; i++) {
					if (this.product.listItem[i].kind === this.$route.params.slug) {
						items.push(this.product.listItem[i])
					}
				}
				return items
			}
		}
	}
</script>

<style type="text/css" scoped>
.container{
	width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    background-color: #ffffff;
    align-items: center;
    justify-items: center;
	margin-right: 5%;
}

@media only screen and (max-width: 2560px) {
    html {
        font-size: 100%;
    }

    .container {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto auto;
		margin: 0 auto;
    }

    .card-detail-content {
        flex-direction: column;
    }
 
}

@media only screen and (max-width: 980px) {
    html {
        font-size: 50%;
    }

    .container {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;
		margin: 0 auto;
    }

    .card-detail-content {
        flex-direction: column;
    }
 
}

@media only screen and (max-width: 780px){
    .container {
		display: block;
		width: 100%;
		margin:0 auto;
	}
}

@media only screen and (max-width: 480px){
    .container {
		display: block;
		width: 100%;
		margin: 0 auto;
    }
}

</style>