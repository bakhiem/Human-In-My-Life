<template>
 <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Đăng nhập</h5>
            <form class="form-signin">
              <div class="form-label-group mb-3">
                <input type="text" id="inputEmail" v-model="user.username" class="form-control" placeholder="Tên đăng nhập" required autofocus>
              </div>
              <div class="form-label-group">
                <input type="password" id="inputPassword" v-model="user.password" class="form-control" placeholder="Mật khẩu" required>
              </div>
              <div class="custom-control custom-checkbox mb-3 mt-2">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Nhớ mật khẩu</label>
              </div>
              <button class="btn btn-primary btn-block text-uppercase" type="button" @click="login">Đăng nhập</button>
              <hr class="my-4">
              <!-- <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
              <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> -->
            <router-link to="home"><button class="btn btn-block btn-secondary" type="button"> Quay lại trang chủ</button></router-link> 
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import {statusCode} from '../const/status_code'

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('user', ['setUser']),
    login() {
      if(this.user.username && this.user.password){
        axios
        .post('http://localhost:6969/api/auth', {user : this.user})
        .then(response => {
          if(response.data && response.data.status && response.data.status === statusCode.SUCCESS) {
            const user = response.data.data
            console.log(user)
            this.setUser(user)
          }
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
        }
    }
  }
};
</script>

