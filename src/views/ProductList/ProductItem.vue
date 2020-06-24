<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="product.image"
      :alt="product.name"
    >
      <v-card-title>{{ product.name }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <p>{{ product.description }}</p>
      <div class="d-flex justify-space-between">
        <span class="text-subtitle-1">{{ itemsLeftInStock }}</span>
        <span class="text-subtitle-1 font-weight-bold">
          {{ priceWithCurrency }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Product } from '@/interfaces/Product'
import currencyFactory from '@/application/currency'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'ProductItem',
  props: {
    product: {
      required: true,
      type: Object as PropType<Product>,
    },
  },
  computed: {
    priceWithCurrency(): string {
      return `${this.product.price}${currencyFactory.currency()}`
    },
    itemsLeftInStock(): string {
      return `${this.product.stock} left`
    },
  },
})
</script>
