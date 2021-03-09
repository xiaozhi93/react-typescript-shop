import axios, { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { QueryProductAction, queryProductSuccess, QUERY_PRODUCT } from "../actions/product.action";
import { Product } from "../models/product.model";

// 可以拆分
function* handleQueryProduct({ sortBy, order, limit }: QueryProductAction) {
  const response: AxiosResponse<Product[]> = yield axios.get(
    `${process.env.REACT_APP_BASE_API_URL}/products`,
    {
      params: {
        sortBy,
        order,
        limit,
      },
    }
  )
  yield put(queryProductSuccess(response.data, sortBy))
}

export default function* productSaga() {
  yield takeEvery(QUERY_PRODUCT, handleQueryProduct)
}