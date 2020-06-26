<template>
  <div class="pt-8">
    <CartItem
      v-for="product in productsAddedToCart"
      :key="product.id"
      :product="product"
      @increment-product-quantity="incrementProductQuantity(product.id)"
      @decrement-product-quantity="decrementProductQuantity(product.id)"
    />
    <div
      data-testid="total-cart-amount"
      class="total-price-container d-flex pa-8 justify-space-between"
    >
      <span>Total Amount</span>
      <v-spacer></v-spacer>
      <span>{{ totalCartPrice }}</span>
    </div>
    <v-footer class="amber justify-center py-4">
      <v-btn min-width="200px">Checkout</v-btn>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartItem from './CartItem.vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'CartList',
  components: { CartItem },
  computed: {
    ...mapGetters(['totalCartPrice', 'productsAddedToCart']),
  },
  methods: {
    ...mapMutations(['increaseProductQuantity', 'decreaseProductQuantity']),
    incrementProductQuantity(id: string) {
      this.increaseProductQuantity(id)
    },
    decrementProductQuantity(id: string) {
      this.decreaseProductQuantity(id)
    },
  },
})
</script>
