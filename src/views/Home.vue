<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your xVue.js App" /> -->
    <ProductItem :product="product" />
  </div>
</template>

<script lang="ts">
import ProductItem from './ProductItem.vue'
import { Product } from '@/interfaces/Product'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {
    ProductItem,
  },
  data: (): { product: Product } => ({
    product: {
      name: 'Unbranded Metal Chair',
      description:
        'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
      price: 10,
      stock: 3,
      image:
        'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
    },
  }),
})
</script>
