<template>
  <v-toolbar>
    <v-btn
      icon
      class="d-sm-none"
      role="button"
      name="navigate_before"
      @click="navigate"
    >
      <v-icon>navigate_before</v-icon>
    </v-btn>
    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppToolbar',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    navigate() {
      this.$emit('navigate')
    },
  },
})
</script>
