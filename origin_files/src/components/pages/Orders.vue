<template>
  <div>
    <Loading :isloading=isloading></Loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <td>購買時間</td>
          <td>Email</td>
          <td>購買款項</td>
          <td>應付金額</td>
          <td>是否付款</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(order, index) in orders"
          :key="index"
        >
          <td>{{ order.create_at }}</td>
          <td>{{ order.user.email }}</td>
          <td>
            <span
              v-for="(item, index) in order.products"
              :key="index"
            >
              {{ item.product.title }} 數量: {{ item.qty }} 件 <br>
            </span>
          </td>
          <td class="text-right">{{ order.total |currency }}</td>
          <td>
            <span
              v-if="order.is_paid"
              class="text-success"
            >已付款</span>
            <span
              v-else
              class="text-danger"
            >尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!--Pagination-->
    <Pagination
      :pagination="pagination"
      @changePage="getOrders"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from '../Pagination'
export default {
  components: { Pagination },
  data () {
    return {
      orders: [],
      pagination: {},
      isloading: false
    }
  },
  methods: {
    getOrders (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      vm.isloading = true
      this.axios.get(api).then((response) => {
        console.log('getOrders', response.data)
        if (response.data.success) {
          vm.orders = response.data.orders
          vm.pagination = response.data.pagination
          // 將timestemp改成date格式
          vm.orders.forEach((item) => {
            let temp = new Date(item.create_at * 1000)
            let year = temp.getFullYear()
            let month = temp.getMonth() + 1
            let day = temp.getDate() + 1
            item.create_at = `${year}/${month}/${day}`
          })
          vm.isloading = false
        }
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
