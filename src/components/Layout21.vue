<template>
<div class="image-introduce">
    <div class="row">
        <div class="col-7">
            <div class="row">
                <img src="@/assets/images/nha_bep.jpg" height="450px" style="padding: 15px;" alt="">
            </div>

            <div class="row">
                <img src="@/assets/images/san_go.jpg" height="250px" style="padding: 15px;" alt="">
            </div>
        </div>

        <div class="col">
            <div class="row">
                <img src="@/assets/images/cua_go.jpg" width="100%" height="700px" style="padding: 15px;" alt="">
            </div>
        </div>
    </div>
</div>
</template>
<script >
	export default {}
</script>
<style type="text/css">
.card-title-box {
    align-items: center;
    justify-content: center;
}

.card-title-box .card {
    margin: 10px;
}

.image-introduce {
    width: 80%;
    margin: 0 auto;
    padding-top: 5px;
}

.image-introduce img:hover{
    color: black;
    text-shadow: 2px 2px 2px #aaa;
}
</style>