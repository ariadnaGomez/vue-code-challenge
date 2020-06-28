import { Product, CartProduct } from '@/interfaces/Product'

function factory() {
  return {
    calculateTotalCartPrice(productList: CartProduct[]) {
      return productList.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.totalPrice
      }, 0)
    },
    calculateTotalProductPrice(product: Product) {
      return product.price * product.addedToCart
    },
  }
}

export default factory()
