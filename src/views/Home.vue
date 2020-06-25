<template>
  <div class="home">
    <ProductList />
  </div>
</template>

<script lang="ts">
import ProductList from './ProductList/ProductList.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {
    ProductList,
  },
})
</script>
