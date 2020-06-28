export interface Product {
  name: string
  description: string
  stock: number
  price: number
  image: string
  id: string
  addedToCart: number
  favorite: boolean
}

export interface CartProduct extends Product {
  totalPrice: number
}

export interface ProductState {
  productList: Array<Product>
  showFavoritesList: boolean
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
