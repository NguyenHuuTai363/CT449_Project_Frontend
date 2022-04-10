<template>
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3"><h2>Register</h2></p>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0"></p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" v-model='username' required />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" v-model='password' required />
            <label class="form-label" for="form3Example4">Password</label>
          </div>
          <!-- Password again -->
          <div class="form-outline mb-3">
            <input type="password" id="form3Example5" class="form-control form-control-lg"
              placeholder="Again password"  v-model='rePassword' required />
            <label class="form-label" for="form3Example5">Again password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;"
                @click='handelSubmitRegister()'
            >Register</button>
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
          	<span>
          		<router-link to='/login'>Login</router-link>
          	</span>

          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import API from '@/services/index.js'
  import { userStore } from '@/stores/userStore.js'
	export default {
    data(){
      return{
        username: "",
        password: "",
        rePassword: "",
      }
    },
    methods:{
      handelSubmitRegister(){
        const username = this.username
        const password = this.password
        const rePassword = this.rePassword
        if(password !== rePassword || !username || !password){
          alert("Mật khẩu không khớp")
        }else{
          API("post","/register",{username,password})
          .then((res)=>{
            console.log(res.data)
            this.$router.push('/login')
          }).catch((err)=>{
              alert(err.response.data)
          })
        }
        
      },
    },
  }
</script>

<style type="text/css">
	
</style>