<template>
  <div class="pt-8">
    <CartItem
      v-for="(product, index) in productList"
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
import { mapState, mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  name: 'CartList',
  components: { CartItem },
  computed: {
    ...mapState('products', ['productList']),
    ...mapGetters('products', ['totalCartPrice']),
  },
  async created() {
    this.getProductsList()
  },
  methods: {
    ...mapActions('products', ['getProductsList']),
    incrementProductQuantity(index: number) {
      console.log(index)
    },
    decrementProductQuantity(index: number) {
      console.log(index)
    },
  },
})
</script>
