import { screen, waitFor } from '@testing-library/vue'
import ProductList from '../ProductList.vue'
import { renderWithStore } from '@/../tests/unit/utils'

describe('ProductList', () => {
  test('should render a list of products', async () => {
    renderWithStore(ProductList)
    await waitFor(() => {
      expect(screen.queryByText('Unbranded Metal Chair')).toBeTruthy()
      expect(screen.queryByText('Handcrafted Metal Towels')).toBeTruthy()
    })
  })
})
