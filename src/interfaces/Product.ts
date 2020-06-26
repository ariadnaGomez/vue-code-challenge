export interface Product {
  name: string
  description: string
  stock: number
  price: number
  image: string
  id: string
}

export interface CartProduct extends Product {
  addedToCart: number
}

export interface ProductModuleState {
  productList: Array<CartProduct>
}

export interface ApiProduct {
  id: string
  image_url: string
  stock: number
  productName: string
  price: number
  productDescription: string
  favorite: string | number
}
