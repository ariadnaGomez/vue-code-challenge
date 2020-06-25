import Vue, { PropType } from 'vue'
import currencyFactory from '@/application/currency'
import { Product } from '@/interfaces/Product'

export default Vue.extend({
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
  },
})
