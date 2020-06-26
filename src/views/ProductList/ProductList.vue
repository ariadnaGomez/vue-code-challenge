<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col
        v-for="(product, index) in productList"
        :key="product.id"
        class="col-6 col-md-4 col-lg-3"
      >
        <v-lazy height="100%" transition="fade-transition">
          <ProductItem
            :product="product"
            @add-product-to-cart="addProductToCart(index)"
          />
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ProductItem from './ProductItem.vue'
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'ProductList',
  components: { ProductItem },
  computed: {
    ...mapState(['productList']),
  },
  async created() {
    this.getProductsList()
  },
  methods: {
    ...mapActions(['getProductsList']),
    ...mapMutations(['addProductToCart']),
  },
})
</script>
