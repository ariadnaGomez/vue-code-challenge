import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { state } from './state'

export const products = {
  namespaced: true,
  mutations,
  actions,
  getters,
  state,
}
