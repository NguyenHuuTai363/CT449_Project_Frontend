<template>
<div class="container">
	<div class="invoice">
		<h2>Hóa Đơn</h2>
		<div class="info row col-10">
			<div class="col-5">Họ tên: {{info.firstName}} {{info.lastName}}</div>
			<div class="col-5">Số điện thoại: {{info.phoneNomber}}</div>
		</div>
		<div class="address">Địa chỉ: {{info.address}}</div>
		<thead class="text-muted">
            <tr class="small text-uppercase">
                <th scope="col-3">Sản phẩm</th>
                <th scope="col-3" width="120">Số lượng</th>
                <th scope="col-3" width="120">Giá bán</th>
                <th scope="col-3" width="120">Thành tiền</th>
            </tr>
        </thead>
	    <tbody  v-for='product in info.cart'>
	    	<td>
	        <figure class="itemside align-items-center">
	            <div class="aside">
	            	<img :src="product.item.image" class="img-sm"/>
	            </div>
	            <figcaption class="info"> 
	            	<a href="#" class="title text-dark" data-abc="true">		
	            		{{product.item.name}}
	            	</a>
	                <p class="text-muted small">
	                	Kích thước: {{product.item.size}}<br> Brand: {{product.item.brand}}
	                </p>
	            </figcaption>
	        </figure>
	        </td>
	        <td>
                <div class="col-xs-6" style="margin-left: 1px;">
                    <div class="product_quantity">
                        1
                    </div>
                </div>
            </td>
            <td>
                <div class="price-wrap"> <var class="price">{{formatPrice(product.item.price)}}</var></div>
                <div class="price-wrap"> <var class="discount">{{formatPrice(product.item.price * product.item.discount)}}</var></div>
            </td>
            <td>
            	 <div class="price-wrap"> <var class="price">{{formatPrice(product.item.price*product.item.discount)}}</var></div>
            </td>
	    </tbody>
	</div>
</div>
</template>
<script>
	import shareMethods from '@/services/shareMethods.js'
	import { userStore } from '@/stores/userStore.js'
	export default{
		setup(){
			const user = userStore()
			return { user }
		},
		data(){
			return {
				info : this.user.profile,
			}
		},
		methods:{
			formatPrice(pri){
				return shareMethods.formatPrice(pri)
			}
		}
	}
</script>
<style type="text/css" scoped>
.img-sm {
    width: 80px;
    /*height: 80px*/
}

.itemside .info {
    padding-left: 15px;
    padding-right: 7px
}

.itemside {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

</style>