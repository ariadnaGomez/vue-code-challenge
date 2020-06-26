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
      <span>{{ totalPriceWithCurrency }}</span>
    </div>
    <v-footer class="amber justify-center py-4">
      <v-btn min-width="200px">Checkout</v-btn>
    </v-footer>
  </div>
</template>

<script lang="ts">
import CartItem from './CartItem.vue'
import { mapGetters, mapActions } from 'vuex'
import mixins from 'vue-typed-mixins'
import PriceWithCurrencyMixin from '@/mixins/priceWithCurrency'

export default mixins(PriceWithCurrencyMixin).extend({
  name: 'CartList',
  components: { CartItem },
  computed: {
    ...mapGetters(['totalCartPrice', 'productsAddedToCart']),
    totalPriceWithCurrency(): string {
      return this.priceWithCurrency(this.totalCartPrice)
    },
  },
  methods: {
    ...mapActions(['addProductToCart', 'removeProductFromCart']),
    incrementProductQuantity(id: string) {
      this.addProductToCart(id)
    },
    decrementProductQuantity(id: string) {
      this.removeProductFromCart(id)
    },
  },
})
</script>
