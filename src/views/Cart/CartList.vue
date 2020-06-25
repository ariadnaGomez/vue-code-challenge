<template>
  <div class="pt-8">
    <CartItem
      v-for="(product, index) in productsAddedToCart"
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
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'CartList',
  components: { CartItem },
  computed: {
    ...mapGetters('products', ['totalCartPrice', 'productsAddedToCart']),
  },
  async created() {
    this.getProductsList()
  },
  methods: {
    ...mapActions('products', ['getProductsList']),
    ...mapMutations('products', ['addProductToCart', 'removeProductFromCart']),
    incrementProductQuantity(index: number) {
      this.addProductToCart(index)
    },
    decrementProductQuantity(index: number) {
      this.removeProductFromCart(index)
    },
  },
})
</script>
