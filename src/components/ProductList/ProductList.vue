<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col
        v-for="product in productsInProductList"
        :key="product.id"
        class="col-6 col-sm-12 col-md-6 col-lg-4 col-xl-3"
      >
        <v-lazy height="100%" transition="fade-transition">
          <ProductItem
            :product="product"
            @add-product-to-cart="addProductToCart(product.id)"
            @add-to-favorites-list="addToFavoriteList(product.id)"
          />
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ProductItem from './ProductItem.vue'
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  name: 'ProductList',
  components: { ProductItem },
  computed: {
    ...mapGetters(['productsInProductList']),
  },

  methods: {
    ...mapActions(['addProductToCart', 'addToFavoriteList']),
  },
})
</script>
