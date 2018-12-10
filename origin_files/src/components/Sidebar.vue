<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link active">
              <span data-feather="home"></span>
              產品管理 <i class="fas fa-dolly-flatbed ml-2"></i><span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupon" class="nav-link">
              <span data-feather="home"></span>
              優惠券<i class="far fa-credit-card ml-2"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link">
              <span data-feather="home"></span>
              訂單列表 <i class="fas fa-clipboard ml-2"></i>
            </router-link>
          </li>
          <hr style="width: 100%">
          <li class="nav-item">
            <router-link to="/index/home"  class="nav-link" href="#">
              <span data-feather="home"></span>
              回到前台<i class="fas fa-arrow-left ml-2"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
