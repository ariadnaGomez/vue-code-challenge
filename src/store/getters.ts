import { ProductState } from '@/interfaces/Product'
import { GetterTree } from 'vuex'
import pricesCalculator from '@/application/pricesCalculator'

function factory(): GetterTree<ProductState, ProductState> {
  return {
    totalCartPrice(state: ProductState) {
      return pricesCalculator.calculateTotalCartPrice(state.productList)
    },
    productsAddedToCart(state: ProductState) {
      return state.productList.filter(product => !!product.addedToCart)
    },
    getProductIndexById(state: ProductState) {
      return (productId: string) => {
        return state.productList.findIndex(product => product.id === productId)
      }
    },
    hasAvailableStock(state: ProductState) {
      return (index: number) => {
        return (
          state.productList[index].stock > state.productList[index].addedToCart
        )
      }
    },
    productIsInCart(state: ProductState) {
      return (index: number) => {
        return state.productList[index].addedToCart > 0
      }
    },
  }
}

export default factory()
