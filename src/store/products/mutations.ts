import { CartProduct, ProductModuleState } from '@/interfaces/Product'
function factory() {
  return {
    setProductList(state: ProductModuleState, productList: Array<CartProduct>) {
      state.productList = productList
    },
    addProductToCart(state: ProductModuleState, index: number) {
      state.productList[index].addedToCart++
    },
    removeProductFromCart(state: ProductModuleState, index: number) {
      state.productList[index].addedToCart--
    },
  }
}

export default factory()
