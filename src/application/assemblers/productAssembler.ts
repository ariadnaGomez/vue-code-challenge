import { Product, ApiProduct } from '@/interfaces/Product'
function factory() {
  return {
    assembleProductList(apiProductList: ApiProduct[]): Product[] {
      return apiProductList.map(apiProduct => ({
        image: apiProduct.image_url,
        id: apiProduct.id,
        description: apiProduct.productDescription,
        name: apiProduct.productName,
        stock: apiProduct.stock,
        price: apiProduct.price,
      }))
    },
  }
}

export default factory()
