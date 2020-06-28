import { Product, ProductState } from '@/interfaces/Product'
function factory() {
  return {
    setProductList(state: ProductState, productList: Array<Product>) {
      state.productList = productList
    },
    increaseProductQuantityInCart(state: ProductState, index: number) {
      state.productList[index].addedToCart++
    },
    decreaseProductQuantityInCart(state: ProductState, index: number) {
      state.productList[index].addedToCart--
    },
    showFavoritesList(state: ProductState) {
      state.showFavoritesList = !state.showFavoritesList
    },
    addToFavoritesList(state: ProductState, index: number) {
      state.productList[index].favorite = !state.productList[index].favorite
    },
  }
}

export default factory()
