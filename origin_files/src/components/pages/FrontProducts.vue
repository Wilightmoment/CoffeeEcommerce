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

    <section class="container my-4">
      <div class="row">
        <div class="col-md-3 mb-3">
          <div class="list-group" id="list-tab" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home" @click="category='淺中焙'">淺中焙</a>
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile" @click="category='中淺焙'">中淺焙</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages" @click="category='中焙'">中焙</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings" @click="category='中深焙'">中深焙</a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
              <ProductCard :filterCategory="filterCategory" @getProduct="getProduct" @addtoCart="addtoCart" :loadingItem="status.loadingItem"></ProductCard>
            </div>
            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
              <ProductCard :filterCategory="filterCategory" @getProduct="getProduct" @addtoCart="addtoCart" :loadingItem="status.loadingItem"></ProductCard>
            </div>
            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
              <ProductCard :filterCategory="filterCategory" @getProduct="getProduct" @addtoCart="addtoCart" :loadingItem="status.loadingItem"></ProductCard>
            </div>
            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
              <ProductCard :filterCategory="filterCategory" @getProduct="getProduct" @addtoCart="addtoCart" :loadingItem="status.loadingItem"></ProductCard>
            </div>
          </div>
        </div>
      </div>
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
      carts: [],
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      category: '淺中焙'
    }
  },
  computed: {
    filterCategory () {
      const vm = this
      return vm.products.filter((item) => {
        return vm.category === item.category
      })
    }
  },
  methods: {
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
    }
  },
  created () {
    this.getCarts()
    this.getProducts()
  }
}
</script>
