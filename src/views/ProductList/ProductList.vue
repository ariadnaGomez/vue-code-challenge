<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col
        v-for="product in productList"
        :key="product.id"
        class="col-6 col-md-4 col-lg-3"
      >
        <v-lazy height="100%" transition="fade-transition">
          <ProductItem :product="product" />
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ProductItem from './ProductItem.vue'
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'ProductList',
  components: { ProductItem },
  computed: {
    ...mapState('products', ['productList']),
  },
  async created() {
    this.getProductsList()
  },
  methods: {
    ...mapActions('products', ['getProductsList']),
  },
})
</script>
