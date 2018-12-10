<template>
  <div class="row">
    <div class="col-md-6 col-lg-4 mb-4" v-for="(item, index) in filterCategory" :key="index">
      <div class="card shadow-sm h-100">
        <div style="height: 200px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}">
        </div>
        <div class="card-body">
          <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
          <h5 class="card-title">
              <a href="#" class="text-dark">{{item.title}}</a>
          </h5>
          <p class="card-text">{{item.content}}</p>
        </div>
        <div class="d-flex justify-content-between align-items-baseline px-3">
            <div v-if="!item.price" class="h5">原價 {{item.origin_price}}</div>
            <del v-if="item.price" class="h6">原價 {{item.origin_price}}</del>
            <div v-if="item.price" class="h5 text-danger">現在只要 {{item.price}}</div>
        </div>
        <div class="card-footer d-flex">
          <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
            <i v-if="item.id===loadingItem" class="fas fa-spinner fa-spin"></i>
            查看更多
          </button>
          <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addtoCart(item.id)">
            <i v-if="item.id===loadingItem" class="fas fa-spinner fa-spin"></i>
            加到購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filterCategory', 'loadingItem'],
  methods: {
    getProduct (id) {
      this.$emit('getProduct', id)
    },
    addtoCart (id) {
      this.$emit('addtoCart', id)
    }
  }
}
</script>
