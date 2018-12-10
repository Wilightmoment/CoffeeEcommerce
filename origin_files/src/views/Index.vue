<template>
  <div>
    <Alert/>
    <section class="container px-0">
      <nav class="navbar navbar-expand-lg navbar-light px-15">
        <router-link to="/index/home" class="index_header"><img src="@/assets/images/coffee_logo.jpg" class="img-fluid index_logo" alt="">咖啡豆豆豆</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto" v-if="!islogin">
            <li class="nav-item mr-4">
              <router-link to="/index/products" class="nav-link hover_line text-secondary">咖啡豆</router-link>
            </li>
            <li class="nav-item mr-4">
              <router-link to="/login" class="nav-link hover_line text-secondary">管理員登入 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link hover_line text-secondary" to="/index/cartpaid">購物車<span class="badge badge-danger index_badge ml-1">{{ carts.length }}</span></router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="islogin">
            <li class="nav-item mr-4">
              <router-link to="/index/products" class="nav-link hover_line text-secondary">咖啡豆</router-link>
            </li>
            <li class="nav-item mr-4">
              <router-link to="/admin/products" class="nav-link hover_line text-secondary">進入後台<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link hover_line text-secondary" href="#" @click="signOut">登出</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>

    <router-view></router-view>

    <footer>
      <div class="container">
        <hr>
        <div class="row">
          <div class="col-sm-4">
            <router-link to="/index/home" class="index_header"><img src="@/assets/images/coffee_logo.jpg" class="img-fluid index_logo" alt="">咖啡豆豆豆</router-link>
          </div>
          <div class="col-sm-8 text-right mt-3">
            <i class="text-dark">Author wilightmoment</i>
            <p class="text-dark">圖片來源: <a href="https://www.buoncaffe.com.tw/products/3hand-pick-mandheling-aceh">https://www.buoncaffe.com.tw/products/3hand-pick-mandheling-aceh</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage.vue'
export default {
  components: {
    Alert
  },
  data () {
    return {
      isloading: false,
      islogin: false,
      carts: []
    }
  },
  methods: {
    signOut () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      this.axios.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/index/home')
          vm.islogin = false
        }
      })
    },
    checkLogin () {
      const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
      const vm = this
      this.axios.post(api).then((response) => {
        if (response.data.success) {
          vm.islogin = true
        } else {
          vm.islogin = false
        }
      })
    },
    getCarts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isloading = true
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          vm.carts = response.data.data.carts
          vm.isloading = false
        }
      })
    }
  },
  created () {
    this.getCarts()
    this.checkLogin()
  },
  updated () {
    this.getCarts()
  }
}
</script>
