import { render, screen } from '@testing-library/vue'
import ProductItem from '@/views/ProductList/ProductItem.vue'

describe('Product List', () => {
  test("should render the product's name", () => {
    const product = { name: 'An interesting product' }
    render(ProductItem, { props: { product } })

    expect(screen.queryByText('An interesting product')).toBeTruthy()
  })

  test("should render a product's description", () => {
    const product = { description: "An interesting product's description" }
    render(ProductItem, { props: { product } })

    expect(
      screen.queryByText("An interesting product's description")
    ).toBeTruthy()
  })

  test("should render a product's description", () => {
    const product = { description: "An interesting product's description" }
    render(ProductItem, { props: { product } })

    expect(
      screen.queryByText("An interesting product's description")
    ).toBeTruthy()
  })

  test("should render a product's price", () => {
    const product = { price: 10 }
    render(ProductItem, { props: { product } })

    expect(screen.queryByText('10$')).toBeTruthy()
  })

  test('should render how many products are left in stock', () => {
    const product = { stock: 5 }
    render(ProductItem, { props: { product } })

    expect(screen.queryByText('5 left')).toBeTruthy()
  })

  test('should render the product image', () => {
    const product = { image: 'test-image-url', name: 'The product name' }
    render(ProductItem, { props: { product } })

    expect(screen.queryByRole('img')).toBeTruthy()
  })
})
