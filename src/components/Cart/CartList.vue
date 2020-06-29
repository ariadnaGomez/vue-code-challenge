<template>
  <div class="d-flex flex-column pt-8 cart-container">
    <CartItem
      v-for="product in productsAddedToCart"
      :key="product.id"
      class="pa-2 pa-sm-0"
      :product="product"
      @increment-product-quantity="incrementProductQuantity(product.id)"
      @decrement-product-quantity="decrementProductQuantity(product.id)"
    />
    <div class="mt-auto">
      <div
        data-testid="total-cart-amount"
        class="total-price-container d-flex pa-8 justify-space-between"
      >
        <span>Total Amount</span>
        <v-spacer></v-spacer>
        <span>{{ totalPriceWithCurrency }}</span>
      </div>
      <v-footer class="indigo justify-center py-4">
        <v-btn min-width="200px">Checkout</v-btn>
      </v-footer>
    </div>
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

<style lang="postcss" scoped>
.cart-container {
  height: calc(100% - 56px);
}

@media screen and (min-width: 600px) {
  .cart-container {
    width: 300px;
    margin: auto;
  }
}
</style>
