<template>
  <div>
    <Loading :isloading = isloading></Loading>
    <section class="container">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="@/assets/images/index-jumbo-1.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/images/index-jumbo-2.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/images/index-jumbo-3.jpg" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/images/index-jumbo-4.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>

    <section class="container mt-4">
      <div class="bg-gray px-3">
        <i class="text-danger mr-2">HOT!!</i><b><i>淺焙豆火熱開賣中~</i></b>
      </div>
    </section>
    <section class="container mt-4">
      <div class="row">
        <div class="col-12"><h3 class="text-info"><b>精選淺中培</b><span class="more_look">查看更多</span></h3></div>
      </div>
      <ProductCard :filterCategory="filterCategory" @getProduct="getProduct" @addtoCart="addtoCart" :loadingItem="status.loadingItem"></ProductCard>

      <div class="row mt-4">
        <div class="col-12"><h3 class="text-info"><b>精選中淺培</b><span class="more_look">查看更多</span></h3></div>
      </div>
      <ProductCard :filterCategory="filterCategory2" @getProduct="getProduct" @addtoCart="addtoCart" :loadingItem="status.loadingItem"></ProductCard>
    </section>

    <!--ProductModal-->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content ">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{product.title}}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <img :src="product.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{product.content}}</p>
              <footer class="blockquote-footer text-left">{{product.description}}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">原價 {{product.origin_price}} 元</div>
              <del class="h6" v-if="product.price">原價 {{product.origin_price}} 元</del>
              <div class="h4 text-danger" v-if="product.price">現在只要 {{product.price}} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                  選購 {{num}} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3" v-if="product.num">
              小計
              <strong>{{product.num*product.price}}</strong> 元
            </div>
            <button class="btn btn-primary" type="button" @click="addtoCart(product.id, product.num)">
              <i class="fas fa-spinner fa-spin" v-if="product.id===status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
import ProductCard from '@/components/ProductCard'
export default {
  components: { ProductCard },
  data () {
    return {
      isloading: false,
      islogin: false,
      carts: [],
      products: [],
      product: {},
      status: {
        loadingItem: ''
      }
    }
  },
  computed: {
    filterCategory () {
      const vm = this
      return vm.products.filter((item, index) => {
        return item.category === '淺中焙' && index % 10 <= 3
      })
    },
    filterCategory2 () {
      const vm = this
      return vm.products.filter((item, index) => {
        return item.category === '中淺焙'
      })
    }
  },
  methods: {
    signOut () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      this.axios.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/index')
          vm.islogin = false
        }
      })
    },
    addtoCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide')
          vm.getCarts()
        }
        vm.status.loadingItem = ''
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
    },
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.isloading = true
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          vm.products = response.data.products
          vm.isloading = false
        }
      })
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      const vm = this
      vm.status.loadingItem = id
      this.axios.get(api).then((response) => {
        if (response.data.success) {
          vm.product = response.data.product
          $('#productModal').modal('show')
        }
        vm.status.loadingItem = ''
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
    }
  },
  created () {
    this.getCarts()
    this.checkLogin()
    this.getProducts()
  }
}
</script>
