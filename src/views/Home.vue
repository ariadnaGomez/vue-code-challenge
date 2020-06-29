<template>
  <ResponsiveLayout
    first-column-title="Product List"
    second-column-title="Cart"
    @show-favorites="showFavoritesList"
  >
    <template v-slot:firstColumn>
      <ProductList />
    </template>
    <template v-slot:secondColumn>
      <CartList />
    </template>
  </ResponsiveLayout>
</template>

<script lang="ts">
import ResponsiveLayout from '../components/Layout/ResponsiveLayout.vue'
import CartList from '../components/Cart/CartList.vue'
import ProductList from '../components/ProductList/ProductList.vue'
import Vue from 'vue'
import { mapActions, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Home',
  components: {
    ProductList,
    CartList,
    ResponsiveLayout,
  },
  async created() {
    this.getProductsList()
  },
  methods: {
    ...mapActions(['getProductsList']),
    ...mapMutations(['showFavoritesList']),
  },
})
</script>
