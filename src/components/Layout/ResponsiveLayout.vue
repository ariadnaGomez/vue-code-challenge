<template>
  <div v-resize="calculateIsMobileSize" class="responsive-layout pa-4">
    <div v-show="showFirstColumn" class="column">
      <AppToolbar :title="firstColumnTitle" @navigate="activateColumn" />
      <slot name="firstColumn"></slot>
    </div>
    <div v-show="showSecondColumn" class="column">
      <AppToolbar :title="secondColumnTitle" @navigate="activateColumn" />
      <slot name="secondColumn"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import AppToolbar from './AppToolbar.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'ResponsiveLayout',
  components: { AppToolbar },
  props: {
    firstColumnTitle: {
      type: String,
      default: '',
    },
    secondColumnTitle: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isMobileSize: true,
    firstColumnActive: true,
  }),
  computed: {
    showFirstColumn(): boolean {
      return !this.isMobileSize || this.firstColumnActive
    },
    showSecondColumn(): boolean {
      return !this.isMobileSize || !this.firstColumnActive
    },
  },
  methods: {
    calculateIsMobileSize() {
      this.isMobileSize = window.innerWidth < 600
    },
    activateColumn() {
      this.firstColumnActive = !this.firstColumnActive
    },
  },
})
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .responsive-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    column-gap: 50px;
  }
}

.column {
  height: calc(100vh - 32px);
  overflow: auto;
}
</style>
