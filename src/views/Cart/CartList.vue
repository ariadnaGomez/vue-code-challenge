<template>
  <div class="pt-8">
    <CartItem
      v-for="(product, index) in products"
      :key="product.id"
      :product="product"
      @increment-product-quantity="incrementProductQuantity(index)"
      @decrement-product-quantity="decrementProductQuantity(index)"
    />
    <div
      data-testid="total-cart-amount"
      class="total-price-container d-flex pa-8 justify-space-between"
    >
      <span>Total Amount</span>
      <v-spacer></v-spacer>
      <span>{{ totalPrice }}</span>
    </div>
    <v-footer class="amber justify-center py-4">
      <v-btn min-width="200px">Checkout</v-btn>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartItem from './CartItem.vue'
import { CartProduct } from '../../interfaces/Product'

export default Vue.extend({
  name: 'CartList',
  components: { CartItem },
  data: () => ({
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
        favorite: true,
        addedToCart: 1,
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
        addedToCart: 2,
      },
    ],
  }),
  computed: {
    totalPrice() {
      return this.products.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.addedToCart * currentValue.price
      }, 0)
    },
  },
  methods: {
    incrementProductQuantity(index: number) {
      this.products[index].addedToCart++
    },
    decrementProductQuantity(index: number) {
      this.products[index].addedToCart--
    },
  },
})
</script>
