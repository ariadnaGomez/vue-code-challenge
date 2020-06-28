import Vue from 'vue'
import currencyFactory from '@/application/currency'

export default Vue.extend({
  methods: {
    priceWithCurrency(price: number): string {
      return `${price}${currencyFactory.currency()}`
    },
  },
})
