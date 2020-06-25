import { Product, ProductModuleState } from '@/interfaces/Product'
function factory() {
  return {
    setProductList(state: ProductModuleState, productList: Array<Product>) {
      state.productList = productList
    },
  }
}

export default factory()
