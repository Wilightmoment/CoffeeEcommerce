<template>
  <div>
    <div class="loading" v-if="isloading">
      <img class="img-fluid" src="@/assets/images/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['isloading']
}
</script>
