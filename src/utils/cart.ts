import { Cart } from "../store/models/cart.model"
import { Product } from "../store/models/product.model"

export const getCartList = () => {
  let cart: Cart[] = []
  if (window.localStorage.getItem("cart")) {
    cart = JSON.parse(window.localStorage.getItem("cart")!)
  }
  return cart
}

export const addGoodsToCart = (product: Product) => {
  // 改变本地数据
  let cart = getCartList()
  if(!(cart.find(item => item._id === product._id))) {
      cart.push({
        ...product,
        count: 1,
      })
  }
  window.localStorage.setItem("cart", JSON.stringify(cart))
}

export const removeGoodsFromCart = (product: Product) => {
  let cart = getCartList()
  cart = cart.filter(item => item._id !== product._id)
  window.localStorage.setItem("cart", JSON.stringify(cart))
  return cart
}

export const updateGoodsToCart = (product: Product, count: number) => {
  let cart = getCartList()
  cart = cart.map((item) => {
    if (item._id === product._id) {
      return {
        ...item,
        count,
      }
    }
    return item
  })
  window.localStorage.setItem("cart", JSON.stringify(cart))
  return cart
}

export const queryGoodsCountFromCart = (product: Product) => {
  let cart = getCartList()
  return (cart.find(item => item._id === product._id)!).count
}