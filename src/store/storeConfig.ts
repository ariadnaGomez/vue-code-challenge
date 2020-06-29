import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { StoreOptions } from 'vuex'
import { ProductState } from '@/interfaces/Product'

export const store: StoreOptions<ProductState> = {
  mutations,
  actions,
  getters,
  state: {
    productList: [],
    showFavoritesList: false,
  },
}
