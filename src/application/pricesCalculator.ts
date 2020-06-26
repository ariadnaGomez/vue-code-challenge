import { CartProduct } from '@/interfaces/Product'

function factory() {
  return {
    calculateTotalCartPrice(productList: CartProduct[]) {
      return productList.reduce((previousValue, currentValue) => {
        return previousValue + this.calculateTotalProductPrice(currentValue)
      }, 0)
    },
    calculateTotalProductPrice(product: CartProduct) {
      return product.price * product.addedToCart
    },
  }
}

export default factory()
