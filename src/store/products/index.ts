import actions from './actions'
import mutations from './mutations'
import { state } from './state'

export const products = {
  namespaced: true,
  mutations,
  actions,
  state,
}
