<template>
  <div class="home">
    <CartItem :product="product" />
    <ProductList />
  </div>
</template>

<script lang="ts">
import CartItem from './Cart/CartItem.vue'
import ProductList from './ProductList/ProductList.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {
    ProductList,
    CartItem,
  },
  data: () => ({
    product: {
      id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
      /* eslint-disable @typescript-eslint/camelcase */
      image:
        'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
      stock: 8,
      name: 'Unbranded Metal Chair',
      price: 43,
      description:
        'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
      favorite: true,
      addedToCart: 1,
    },
  }),
})
</script>
