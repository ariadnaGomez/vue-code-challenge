<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col v-for="product in products" :key="product.id">
          <ProductItem :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import ProductItem from './ProductItem.vue'
import Vue from 'vue'
import { Product } from '../../interfaces/Product'

export default Vue.extend({
  name: 'ProductList',
  components: { ProductItem },
  data: (): { products: Product[] } => ({
    products: [
      {
        id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
        image:
          'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        stock: 8,
        name: 'Unbranded Metal Chair',
        price: 43,
        description:
          'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
      },
      {
        id: '20cc33f1-223b-4cf0-878d-fdedb3f60b56',
        image:
          'https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels',
        stock: 41,
        name: 'Handcrafted Metal Towels',
        price: 98,
        description:
          'Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.',
      },
    ],
  }),
})
</script>
