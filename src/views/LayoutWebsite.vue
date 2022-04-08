<template>
    <Menu />
    <router-view />  
    <Footer />
</template>

<script>
    import Menu from '@/components/Menu.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        components:{
            Menu,
            Footer,
        },

    }
</script>

<style type="text/css">
    
</style>