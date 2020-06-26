import { screen, fireEvent, within } from '@testing-library/vue'
import Home from '../Home.vue'
import { renderWithStore } from '@/../tests/unit/utils'

async function addProductToCart(index: number) {
  const addToCartButton = await screen.findAllByRole('button', {
    name: 'Add',
  })
  await fireEvent.click(addToCartButton[index])
}

function decreaseCartQuatity() {
  const decreaseCartQuantityButton = screen.getAllByRole('button', {
    name: 'remove',
  })
  fireEvent.click(decreaseCartQuantityButton[0])
}

function increaseCartQuatity() {
  const increaseCartQuantityButton = screen.getAllByRole('button', {
    name: 'add',
  })
  fireEvent.click(increaseCartQuantityButton[0])
}

describe('Home', () => {
  test('should update items on the cart when adding and removing items', async () => {
    renderWithStore(Home)
    await addProductToCart(1)

    let productNameItems = screen.getAllByText('Unbranded Metal Chair')
    expect(productNameItems.length).toEqual(1)

    await decreaseCartQuatity()
    productNameItems = screen.getAllByText('Unbranded Metal Chair')

    expect(productNameItems.length).toEqual(1)
  })

  test('should update items quantity when clicking increase and decrease quantity buttons', async () => {
    renderWithStore(Home)
    await addProductToCart(0)
    await increaseCartQuatity()

    const productsAddedToCart = screen.getAllByTestId('productsAddedToCart')
    expect(within(productsAddedToCart[0]).queryByText('2')).toBeTruthy()

    await decreaseCartQuatity()

    expect(within(productsAddedToCart[0]).queryByText('1')).toBeTruthy()
  })

  test('should update total price when adding items to the cart', async () => {
    renderWithStore(Home)
    await addProductToCart(0)
    await increaseCartQuatity()
    await addProductToCart(1)

    const totalAmountContainer = screen.getByTestId('total-cart-amount')
    expect(within(totalAmountContainer).queryByText('184')).toBeTruthy()
  })

  test('should update second items quantity when clicking increase quantity button', async () => {
    renderWithStore(Home)
    await addProductToCart(1)
    await increaseCartQuatity()

    const productNameItems = screen.getAllByText('Unbranded Metal Chair')
    expect(productNameItems.length).toEqual(1)
    const secondItemByName = screen.getAllByText('Handcrafted Metal Towels')
    expect(secondItemByName.length).toEqual(2)

    const productsAddedToCart = screen.getAllByTestId('productsAddedToCart')
    expect(within(productsAddedToCart[0]).queryByText('2')).toBeTruthy()
  })
})
