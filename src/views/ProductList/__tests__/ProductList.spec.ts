import { render, screen, waitFor } from '@testing-library/vue'
import ProductList from '../ProductList.vue'
import { store } from '@/store/storeConfig'

describe('ProductList', () => {
  it('should render a list of products', async () => {
    render(ProductList, { store, stubs: ['v-lazy'] })
    await waitFor(() => {
      expect(screen.queryByText('Unbranded Metal Chair')).toBeTruthy()
      expect(screen.queryByText('Handcrafted Metal Towels')).toBeTruthy()
    })
  })
})
