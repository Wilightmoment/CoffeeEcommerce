<template>
  <div>
    <div class="text-center mt-3">
      <img src="@/assets/images/login.gif" class="img-fluid mx-auto" alt="">
    </div>
    <form class="form-signin" @submit.prevent="signin">
      <!-- <h1 class="h3 mb-3 font-weight-normal text-secondary text-center">請先登入</h1> -->
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" v-model="user.username" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" v-model="user.password" placeholder="Password" required>
      <p class="text-danger" v-if="!status">登入失敗! 帳號或密碼錯誤</p>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> 記住我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
      <p class="mt-5 mb-3 text-muted text-center">&copy; Wilightmoment</p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      status: true
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      const vm = this
      this.axios.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin/products')
        } else {
          vm.status = false
        }
      })
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
