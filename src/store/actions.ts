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
  }
}

export default factory()
