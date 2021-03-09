import { ProductUnionActionType, QUERY_PRODUCT_SUCCESS } from "../actions/product.action";
import { Product } from "../models/product.model";

export interface ProductState {
  createdAt: Product[]
}
const intialState: ProductState = {
  createdAt: [],
}
export default function productReducer(state = intialState, action: ProductUnionActionType) {
  switch(action.type) {
    case QUERY_PRODUCT_SUCCESS:
      return {
        ...state,
        [action.sortBy]: action.payload
      }
    default:
      return state
  }
}