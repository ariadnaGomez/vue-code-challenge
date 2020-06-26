import { screen, within } from '@testing-library/vue'
import CartList from '../CartList.vue'
import { renderWithStore } from '@/../tests/unit/utils'

describe('CartList', () => {
  test('price should be 0 when no products are added to cart', () => {
    renderWithStore(CartList)
    const totalAmountContainer = screen.getByTestId('total-cart-amount')
    expect(within(totalAmountContainer).queryByText('0')).toBeTruthy()
  })
})
