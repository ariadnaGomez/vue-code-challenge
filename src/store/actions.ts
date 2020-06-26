import productsServices from '@/api/productsServices'
import { ActionContext } from 'vuex'
import assembler from '@/application/assemblers/productAssembler'
import { ProductState } from '@/interfaces/Product'

function factory() {
  return {
    async getProductsList({ commit }: ActionContext<ProductState, {}>) {
      try {
        const productsList = await productsServices.getProductsList()
        const assembledProductList = assembler.assembleProductList(productsList)
        commit('setProductList', assembledProductList)
        return assembledProductList
      } catch (error) {
        return error
      }
    },
    addProductToCart(
      { commit, getters }: ActionContext<ProductState, {}>,
      productId: string
    ) {
      const index = getters.getProductIndexById(productId)

      const hasAvailableStock = getters.hasAvailableStock(index)
      if (hasAvailableStock) {
        commit('increaseProductQuantityInCart', index)
      }
    },
    removeProductFromCart(
      { commit, getters }: ActionContext<ProductState, {}>,
      productId: string
    ) {
      const index = getters.getProductIndexById(productId)
      const productIsInCart = getters.productIsInCart(index)
      if (productIsInCart) {
        commit('decreaseProductQuantityInCart', index)
      }
    },
  }
}

export default factory()
