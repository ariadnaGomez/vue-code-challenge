/* eslint-disable @typescript-eslint/camelcase */
import assembler from '../productAssembler'
describe('productAssembler', () => {
  test('should assemble a product list', () => {
    const productList = [
      {
        id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
        image_url:
          'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        stock: 8,
        productName: 'Unbranded Metal Chair',
        price: 43,
        productDescription:
          'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
        favorite: '1',
      },
    ]
    const assembledProductList = assembler.assembleProductList(productList)
    expect(assembledProductList).toEqual([
      {
        id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
        image:
          'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        stock: 8,
        name: 'Unbranded Metal Chair',
        price: 43,
        description:
          'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
      },
    ])
  })
})
