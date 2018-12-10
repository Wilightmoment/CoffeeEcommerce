<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pagination.has_pre}" @click.prevent="changePage(pagination.current_page-1)">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" v-for="(page, index) in pagination.total_pages" :key="index"
         :class="{'active' : page === pagination.current_page}"
         @click.prevent="changePage(page)">
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pagination.has_next}" @click.prevent="changePage(pagination.current_page+1)">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    changePage (page) {
      this.$emit('changePage', page)
    }
  }
}
</script>
