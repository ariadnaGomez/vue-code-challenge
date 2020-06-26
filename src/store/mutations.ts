import { CartProduct, ProductState } from '@/interfaces/Product'
function factory() {
  return {
    setProductList(state: ProductState, productList: Array<CartProduct>) {
      state.productList = productList
    },
    addProductToCart(state: ProductState, index: number) {
      state.productList[index].addedToCart++
    },
    increaseProductQuantity(state: ProductState, productId: string) {
      const index = state.productList.findIndex(
        product => product.id === productId
      )
      state.productList[index].addedToCart++
    },
    decreaseProductQuantity(state: ProductState, productId: string) {
      const index = state.productList.findIndex(
        product => product.id === productId
      )
      if (state.productList[index].addedToCart > 0) {
        state.productList[index].addedToCart--
      }
    },
  }
}

export default factory()
