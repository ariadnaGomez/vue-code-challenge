import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from '@testing-library/vue'
import CartItem from '../CartItem.vue'
describe('CartItem', () => {
  test('should render the product name in the cart item', () => {
    const product = { name: 'An interesting product' }
    render(CartItem, { props: { product } })
    expect(screen.queryByText('An interesting product')).toBeTruthy()
  })

  test('should render the products price', () => {
    const product = { price: 10 }
    render(CartItem, { props: { product } })
    expect(screen.queryByText('10$')).toBeTruthy()
  })

  test('should render how many products have been added to cart', () => {
    const product = { addedToCart: 6 }
    render(CartItem, { props: { product } })
    const productsAddedToCart = screen.getByTestId('productsAddedToCart')
    expect(within(productsAddedToCart).queryByText('6')).toBeTruthy()
  })

  test('should increase items added to cart when clicking the plus button', async () => {
    const product = { addedToCart: 6 }
    render(CartItem, { props: { product } })
    const button = screen.getByRole('button', { name: 'add' })
    fireEvent.click(button)
    await waitFor(() => {
      const productsAddedToCart = screen.getByTestId('productsAddedToCart')
      expect(within(productsAddedToCart).queryByText('7')).toBeTruthy()
    })
  })

  test('should decrease items added to cart when clicking the plus button', async () => {
    const product = { addedToCart: 6 }
    render(CartItem, { props: { product } })
    const button = screen.getByRole('button', { name: 'remove' })
    fireEvent.click(button)
    await waitFor(() => {
      const productsAddedToCart = screen.getByTestId('productsAddedToCart')
      expect(within(productsAddedToCart).queryByText('5')).toBeTruthy()
    })
  })

  test('should render the product image', () => {
    const product = { image: 'test-image-url', name: 'The product name' }
    render(CartItem, { props: { product } })

    expect(screen.queryByRole('img')).toBeTruthy()
  })
})
