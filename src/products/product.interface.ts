export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
}

export interface ProductItem {
  productId: number;
  quantity: number;
  price: number;
}
