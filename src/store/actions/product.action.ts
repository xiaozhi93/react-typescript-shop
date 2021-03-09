/**
 * 首页产品
 */

import { Product } from "../models/product.model"


export const QUERY_PRODUCT = "QUERY_PRODUCT"
export const QUERY_PRODUCT_SUCCESS = "QUERY_PRODUCT_SUCCESS"


export interface QueryProductAction {
  type: typeof QUERY_PRODUCT
  sortBy: string
  order: string
  limit: number
}

export interface QueryProductSuccessAction {
  type: typeof QUERY_PRODUCT_SUCCESS,
  payload: Product[],
  sortBy: string
}

// 某个参数不传用默认值, 不用对象
export const queryProduct = (sortBy: string, order: string = "desc", limit: number = 10): QueryProductAction => ({
  type: QUERY_PRODUCT,
  sortBy,
  order,
  limit
})

// action可以多个参数
export const queryProductSuccess = (payload: Product[], sortBy: string): QueryProductSuccessAction => ({
  type: QUERY_PRODUCT_SUCCESS,
  payload,
  sortBy
})

// 联合类型
export type ProductUnionActionType = QueryProductAction | QueryProductSuccessAction