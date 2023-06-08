import { Product } from "./product.model";

export const PRODUCTS: Product[] = [];

export function addProduct(product: Product) {
  PRODUCTS.push(product);
}

export function calcStock() {
  return PRODUCTS.reduce((total, product) => total + product.stock, 0);
}
