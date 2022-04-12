<template>
	<div class="khoangtrang"><h2>Chi tiết sản phẩm</h2></div>
    <div class="row container detail">
        <div class="col-lg-7 order-lg-2 order-1">
        	<div class="img">
            	<img src="/src/assets/images/banner1.jpg" width="100%" alt=""/>
            </div>
           	<div class="">
	                <div class="row" style="margin-top: 15px;">
	                    <div class="col-xs-6" style="margin-left: 5x;"> 
	                    	<span class="product_options">Tình trạng sản phẩm:</span><br> 
	                    	<button class="btn btn-primary btn-sm ">Mới 100%</button> 
	                    	<button class="btn btn-primary btn-sm">Hàng đổi trả còn mới 95%</button>
	                    </div>
	                </div>
	        </div>
        	<div class="row">
                <div class="col-xs-6" style="margin-left: 1px;">
                    <div class="product_quantity"> 
                    	<span>Số lượng: 1</span> 
                    </div>
                </div>
                <div class="col-xs-6"> 
                	<button type="button" class="btn btn-primary shop-button">
                		Thêm vào giỏ hàng
                	</button> 
                	<button type="button" class="btn btn-success shop-button">Mua ngay</button>
                </div>
            </div>
        </div>

        <div class="col-lg-5 order-3">
            <div class="product_description">
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li class="breadcrumb-item active">Phòng ăn</li>
                    </ol>
                </nav>
                <div class="product_name">Bộ nội thất phòng bếp</div>
                <div> 
                	<span class="product_price">Giá: 58,990,000vnđ</span>
                </div>

                <hr class="singleline"/>
                <div> 
                	<span class="product_info">Màu sắc:</span><br/> 
                	<span class="product_info">Kích thước:</span><br/> 
                	<span class="product_info">Chất liệu:</span><br/> 
                	<span class="product_info">Xuất xứ:</span><br/> 
                	<span class="product_info">Bảo hành: 36 tháng</span> 
                </div>

	            <hr class="singleline"/>
	            <div>
	            	Mô tả sản phẩm: 
	            </div>

        </div>
    </div>
</div>
<div class="khoangtrang"></div>
</template>

<script>
	export default {}
</script>

<style type="text/css" scoped>
.khoangtrang{
	margin: 1rem;
}
.detail{
	margin: 0 auto;
	border: 1px solid #aaa;
	padding: 1rem;
	box-shadow: 5px 7px 5px #bbb;
	border-radius: 5px;
	background-color: #ddd;
}
button{
	margin: 0.5rem;
}
.img{
	width: 100%;
	border: 1px solid #ddd;
	box-shadow: 5px 7px 5px #bbb;
	border-radius: 2px;
}
.product_name {
    font-size: 35px;
    font-weight: 500;
}
</style>