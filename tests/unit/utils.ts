import { render } from '@testing-library/vue'
import { store } from '@/store/storeConfig'
import { VueClass } from '@vue/test-utils'

export function renderWithStore<V extends Vue>(
  component: VueClass<V>,
  customStore?: any
) {
  const resetState = {
    state: { productList: [] },
  }
  render(component, {
    store: { ...store, ...resetState, ...customStore },
    stubs: ['v-lazy', 'v-toolbar'],
  })
}
