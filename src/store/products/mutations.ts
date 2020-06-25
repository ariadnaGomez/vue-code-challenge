import { CartProduct, ProductModuleState } from '@/interfaces/Product'
function factory() {
  return {
    setProductList(state: ProductModuleState, productList: Array<CartProduct>) {
      state.productList = productList
    },
  }
}

export default factory()
