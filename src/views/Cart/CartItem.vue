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
    <div>
      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-actions>
        <v-icon
          role="button"
          name="add"
          @click="incrementProductQuantity"
          @onKeyDown="incrementProductQuantity"
        >
          add
        </v-icon>
        <span data-testid="productsAddedToCart">
          {{ addedToCartAssembled }}
        </span>
        <v-icon
          role="button"
          name="remove"
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
  created() {
    this.addedToCartAssembled = this.product.addedToCart | 0
  },
  data: () => ({
    addedToCartAssembled: 0,
  }),
  methods: {
    incrementProductQuantity() {
      this.addedToCartAssembled++
    },
    decrementProductQuantity() {
      this.addedToCartAssembled--
    },
  },
})
</script>
