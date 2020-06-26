import { ProductState } from '@/interfaces/Product'
import { GetterTree } from 'vuex'

function factory(): GetterTree<ProductState, ProductState> {
  return {
    totalCartPrice(state: ProductState) {
      return state.productList.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.addedToCart * currentValue.price
      }, 0)
    },
    hasAvailableStock(state: ProductState) {
      return (index: number) => {
        return (
          state.productList[index].addedToCart < state.productList[index].stock
        )
      }
    },
    productsAddedToCart(state: ProductState) {
      return state.productList.filter(product => !!product.addedToCart)
    },
  }
}

export default factory()
