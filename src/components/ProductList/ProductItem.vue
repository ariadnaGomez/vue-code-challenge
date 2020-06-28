<template>
  <v-card class="mx-auto" height="100%">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="product.image"
      :alt="product.name"
    >
      <v-card-title>{{ product.name }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <p class="d-none d-sm-block">{{ product.description }}</p>
      <div class="d-flex justify-space-between">
        <span class="text-subtitle-1 d-none d-sm-block">{{
          itemsLeftInStock
        }}</span>
        <span class="text-subtitle-1 font-weight-bold">
          {{ productPrice }}
        </span>
      </div>
    </v-card-text>
    <v-btn
      role="button"
      name="addToCart"
      @click="addProductToCart"
      @onKeyDown="addProductToCart"
    >
      <v-icon>
        add
      </v-icon>
      Add
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Product } from '@/interfaces/Product'
import { PropType } from 'vue'
import mixins from 'vue-typed-mixins'
import PriceWithCurrencyMixin from '@/mixins/priceWithCurrency'

export default mixins(PriceWithCurrencyMixin).extend({
  name: 'ProductItem',
  props: {
    product: {
      required: true,
      type: Object as PropType<Product>,
    },
  },
  computed: {
    productsLeft(): number {
      return this.product.stock - this.product.addedToCart
    },
    itemsLeftInStock(): string {
      return `${this.productsLeft} left`
    },
    productPrice(): string {
      return this.priceWithCurrency(this.product.price)
    },
  },
  methods: {
    addProductToCart() {
      this.$emit('add-product-to-cart')
    },
  },
})
</script>
