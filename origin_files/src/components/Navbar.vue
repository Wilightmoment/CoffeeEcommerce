<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link to="/admin/products" class="navbar-brand col-sm-3 col-md-2 mr-0">咖啡豆豆豆</router-link>
      <h5 class="text-white">~管理員後台~</h5>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      console.log(this)
      this.axios.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/index/home')
        }
      })
    }
  }
}
</script>
