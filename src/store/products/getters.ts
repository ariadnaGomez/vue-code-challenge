import { ProductModuleState } from '@/interfaces/Product'

function factory() {
  return {
    totalCartPrice(state: ProductModuleState) {
      return state.productList.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.addedToCart * currentValue.price
      }, 0)
    },
  }
}

export default factory()
