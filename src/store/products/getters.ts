import { ProductModuleState } from '@/interfaces/Product'

function factory() {
  return {
    totalCartPrice(state: ProductModuleState) {
      return state.productList.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.addedToCart * currentValue.price
      }, 0)
    },
    hasAvailableStock(state: ProductModuleState) {
      return (index: number) => {
        return (
          state.productList[index].addedToCart < state.productList[index].stock
        )
      }
    },
    productsAddedToCart(state: ProductModuleState) {
      return state.productList.filter(product => !!product.addedToCart)
    },
  }
}

export default factory()
