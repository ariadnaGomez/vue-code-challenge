import { render, screen } from '@testing-library/vue'
import ProductList from '../ProductList.vue'

describe('ProductList', () => {
  it('should render a list of products', () => {
    render(ProductList)
    expect(screen.queryByText('Unbranded Metal Chair')).toBeTruthy()
    expect(screen.queryByText('Handcrafted Metal Towels')).toBeTruthy()
  })
})
