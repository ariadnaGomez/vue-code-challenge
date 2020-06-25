<template>
  <div class="home">
    <CartList />
    <ProductList />
  </div>
</template>

<script lang="ts">
import CartList from './Cart/CartList.vue'
import ProductList from './ProductList/ProductList.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {
    ProductList,
    CartList,
  },
  data: () => ({}),
})
</script>
