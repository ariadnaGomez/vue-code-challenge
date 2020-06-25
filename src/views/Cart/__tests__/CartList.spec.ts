import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
} from '@testing-library/vue'
import CartList from '../CartList.vue'

describe('CartList', () => {
  test('should render a list of products', () => {
    render(CartList)
    expect(screen.queryByText('Unbranded Metal Chair')).toBeTruthy()
    expect(screen.queryByText('Handcrafted Metal Towels')).toBeTruthy()
  })

  test('should render total amount of products in the cart', () => {
    render(CartList)
    const totalAmountContainer = screen.getByTestId('total-cart-amount')
    expect(within(totalAmountContainer).queryByText('239')).toBeTruthy()
  })

  test('should add items to cart when clicking the plus button', async () => {
    render(CartList)
    const button = screen.getAllByRole('button', { name: 'add' })
    fireEvent.click(button[0])
    await waitFor(() => {
      const productsAddedToCart = screen.getAllByTestId('productsAddedToCart')
      expect(within(productsAddedToCart[0]).queryByText('2')).toBeTruthy()
    })
  })

  test('should remove items from the cart when clicking the remove button', async () => {
    render(CartList)
    const button = screen.getAllByRole('button', { name: 'remove' })
    fireEvent.click(button[1])
    await waitFor(() => {
      const productsAddedToCart = screen.getAllByTestId('productsAddedToCart')
      expect(within(productsAddedToCart[1]).queryByText('1')).toBeTruthy()
    })
  })

  test('should update total price when adding items to the cart', async () => {
    render(CartList)
    const button = screen.getAllByRole('button', { name: 'add' })
    fireEvent.click(button[0])
    await waitFor(() => {
      const totalAmountContainer = screen.getByTestId('total-cart-amount')
      expect(within(totalAmountContainer).queryByText('282')).toBeTruthy()
    })
  })

  test('should update total price when removing items from the cart', async () => {
    render(CartList)
    const button = screen.getAllByRole('button', { name: 'remove' })
    fireEvent.click(button[1])
    await waitFor(() => {
      const totalAmountContainer = screen.getByTestId('total-cart-amount')
      expect(within(totalAmountContainer).queryByText('141')).toBeTruthy()
    })
  })
})
