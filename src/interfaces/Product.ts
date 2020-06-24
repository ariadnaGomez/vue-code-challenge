export interface Product {
  name: string
  description: string
  stock: number
  price: number
  image: string
  id: string
}

export interface ProductModuleState {
  productList: Array<Product>
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
