<template>
  <div>
    <img :src="product.image" :alt="product.name" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <span>{{ priceWithCurrency }}</span>
    <span>{{ itemsLeftInStock }}</span>
  </div>
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
