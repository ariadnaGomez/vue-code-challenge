import { screen, waitFor } from '@testing-library/vue'
import ProductList from '../ProductList.vue'
import { renderWithStore } from '@/../tests/unit/utils'

describe('ProductList', () => {
  test('should render a list of products', async () => {
    renderWithStore(ProductList, {
      state: {
        productList: [
          {
            id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
            image:
              'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
            stock: 8,
            name: 'Unbranded Metal Chair',
            price: 43,
            description:
              'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
            addedToCart: 8,
          },
        ],
      },
    })
    await waitFor(() => {
      expect(screen.queryByText('Unbranded Metal Chair')).toBeTruthy()
    })
  })
})
