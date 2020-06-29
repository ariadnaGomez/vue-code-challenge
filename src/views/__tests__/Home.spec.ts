import { screen, waitFor, fireEvent, within } from '@testing-library/vue'
import Home from '../Home.vue'
import { renderWithStore } from '@/../tests/unit/utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
Vue.use(Vuetify)
async function addProductToCart(index: number) {
  const addToCartButton = await screen.findAllByTestId('addToCart')
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
    await addProductToCart(0)

    let productNameItems = await screen.findAllByText('Unbranded Metal Chair')
    expect(productNameItems.length).toEqual(2)

    await decreaseCartQuatity()
    productNameItems = await screen.findAllByText('Unbranded Metal Chair')

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
    expect(within(totalAmountContainer).queryByText('184$')).toBeTruthy()
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

  test('should not add more products to cart if there is no stock available', async () => {
    renderWithStore(Home, {
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
    await addProductToCart(0)
    const productsAddedToCart = screen.getAllByTestId('productsAddedToCart')
    expect(within(productsAddedToCart[0]).queryByText('8')).toBeTruthy()
  })

  test('should show favorites list when clicking button', async () => {
    renderWithStore(Home)
    const favoritesButton = await screen.findByTestId('show-favorites-button')
    await fireEvent.click(favoritesButton)
    await waitFor(() =>
      expect(
        screen.queryByText('Handcrafted Metal Towels')
      ).not.toBeInTheDocument()
    )
  })

  test("should add to favorite list when clicking product's item favorite button", async () => {
    renderWithStore(Home)
    const addToFavoritesButton = await screen.findAllByTestId(
      'add-favorites-button'
    )
    await fireEvent.click(addToFavoritesButton[1])
    const showFavoritesButton = await screen.findByTestId(
      'show-favorites-button'
    )
    await fireEvent.click(showFavoritesButton)
    await waitFor(() =>
      expect(screen.queryByText('Handcrafted Metal Towels')).toBeInTheDocument()
    )
  })

  test("should remove from favorite list when clicking product's item favorite button", async () => {
    renderWithStore(Home)
    const favoritesButton = await screen.findByTestId('show-favorites-button')
    await fireEvent.click(favoritesButton)
    const addToFavoritesButton = await screen.findAllByTestId(
      'add-favorites-button'
    )
    await fireEvent.click(addToFavoritesButton[0])
    expect(
      screen.queryByText('Handcrafted Metal Towels')
    ).not.toBeInTheDocument()
  })

  test('should show border icon when product is not favorite', async () => {
    renderWithStore(Home)
    const addToFavoritesButton = await screen.findAllByTestId(
      'add-favorites-button'
    )
    expect(addToFavoritesButton[1].textContent).toEqual('favorite_border')
  })

  test('should switch to normal icon when product is favorite', async () => {
    renderWithStore(Home)
    const addToFavoritesButton = await screen.findAllByTestId(
      'add-favorites-button'
    )
    await fireEvent.click(addToFavoritesButton[1])
    expect(addToFavoritesButton[1].textContent).toEqual('favorite')
  })
})
