<template>
  <v-card
    class="mx-auto d-flex justify-space-between"
    height="100%"
    max-width="500px"
  >
    <v-img
      class="white--text align-end"
      max-width="150px"
      :src="product.image"
      :alt="product.name"
    >
    </v-img>
    <div class="flex-grow-1 pa-4">
      <v-card-title class="pa-0 pb-4">{{ product.name }}</v-card-title>

      <v-card-actions>
        <v-icon
          role="button"
          name="incrementQuantity"
          @click="incrementProductQuantity"
          @onKeyDown="incrementProductQuantity"
        >
          add
        </v-icon>
        <span data-testid="productsAddedToCart">
          {{ product.addedToCart }}
        </span>
        <v-icon
          role="button"
          name="decrementQuantity"
          @click="decrementProductQuantity"
          @onKeyDown="decrementProductQuantity"
        >
          remove
        </v-icon>
      </v-card-actions>
    </div>
    <v-card-subtitle class="indigo--text text-subtitle-1">{{
      priceWithCurrency
    }}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CartProduct } from '@/interfaces/Product'
import mixins from 'vue-typed-mixins'
import PriceWithCurrencyMixin from '@/mixins/priceWithCurrency'

export default mixins(PriceWithCurrencyMixin).extend({
  name: 'CartItem',
  props: {
    product: {
      required: true,
      type: Object as PropType<CartProduct>,
    },
  },
  methods: {
    incrementProductQuantity() {
      this.$emit('increment-product-quantity')
    },
    decrementProductQuantity() {
      this.$emit('decrement-product-quantity')
    },
  },
})
</script>
