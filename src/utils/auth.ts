import { Jwt } from "../store/models/auth.model"

export function isAuth(): Boolean | Jwt {
  const jwt = window.localStorage.getItem('jwt')
  if(jwt) {
    return JSON.parse(jwt)
  }
  return false
}