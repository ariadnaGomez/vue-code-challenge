import { ProductState, CartProduct } from '@/interfaces/Product'
import { GetterTree } from 'vuex'
import pricesCalculator from '@/application/pricesCalculator'

function factory(): GetterTree<ProductState, ProductState> {
  return {
    totalCartPrice(state: ProductState, getters) {
      return pricesCalculator.calculateTotalCartPrice(
        getters.productsAddedToCart
      )
    },
    productsAddedToCart(state: ProductState) {
      return state.productList
        .filter(product => !!product.addedToCart)
        .map(
          (product): CartProduct => ({
            ...product,
            totalPrice: pricesCalculator.calculateTotalProductPrice(product),
          })
        )
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
    productsInProductList(state: ProductState, getters) {
      if (state.showFavoritesList) {
        return getters.filteredProductListByFavorite
      }
      return state.productList
    },
    filteredProductListByFavorite(state: ProductState) {
      return state.productList.filter(product => product.favorite)
    },
  }
}

export default factory()
