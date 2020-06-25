import { store } from '@/store/storeConfig'
import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
} from '@testing-library/vue'
import CartList from '../CartList.vue'

fdescribe('CartList', () => {
  test('should render a list of products', async () => {
    render(CartList, { store })
    await waitFor(() => {
      expect(screen.queryByText('Unbranded Metal Chair')).toBeTruthy()
      expect(screen.queryByText('Handcrafted Metal Towels')).toBeTruthy()
    })
  })

  test('price should be 0 when no products are added to cart', () => {
    render(CartList, { store })
    const totalAmountContainer = screen.getByTestId('total-cart-amount')
    expect(within(totalAmountContainer).queryByText('0')).toBeTruthy()
  })

  xtest('should add items to cart when clicking the plus button', async () => {
    render(CartList, { store })
    const button = screen.getAllByRole('button', { name: 'add' })
    fireEvent.click(button[0])
    await waitFor(() => {
      const productsAddedToCart = screen.getAllByTestId('productsAddedToCart')
      expect(within(productsAddedToCart[0]).queryByText('1')).toBeTruthy()
    })
  })

  xtest('should remove items from the cart when clicking the remove button', async () => {
    render(CartList, { store })
    const button = screen.getAllByRole('button', { name: 'remove' })
    fireEvent.click(button[1])
    await waitFor(() => {
      const productsAddedToCart = screen.getAllByTestId('productsAddedToCart')
      expect(within(productsAddedToCart[1]).queryByText('1')).toBeTruthy()
    })
  })

  xtest('should update total price when adding items to the cart', async () => {
    render(CartList, { store })
    const button = screen.getAllByRole('button', { name: 'add' })
    fireEvent.click(button[0])
    await waitFor(() => {
      const totalAmountContainer = screen.getByTestId('total-cart-amount')
      expect(within(totalAmountContainer).queryByText('282')).toBeTruthy()
    })
  })

  xtest('should update total price when removing items from the cart', async () => {
    render(CartList, { store })
    const button = screen.getAllByRole('button', { name: 'remove' })
    fireEvent.click(button[1])
    await waitFor(() => {
      const totalAmountContainer = screen.getByTestId('total-cart-amount')
      expect(within(totalAmountContainer).queryByText('141')).toBeTruthy()
    })
  })
})
