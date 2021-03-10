import { Product } from "./product.model";

export interface Cart extends Product {
  count: number
}