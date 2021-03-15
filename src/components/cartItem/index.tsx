import { Image, Button, Input } from "antd"
import React, { ChangeEvent, FC,  useState } from "react"
import { Cart } from "../../store/models/cart.model"
import { updateGoodsToCart, removeGoodsFromCart } from "../../utils/cart"

interface CartItemProps {
  product: Cart
  setCart: (arg: Cart[]) => void
}
const CartItem: FC<CartItemProps> = ({ product, setCart}) => {
  let [count, setCount] = useState(product.count)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let count = parseInt(event.target.value)
    setCount(count)
    // 修改数据库数据, 修改本地装填;
    setCart(updateGoodsToCart(product, count))

  }
  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image
          width={120}
          preview={false}
          src={`${process.env.REACT_APP_BASE_API_URL}/product/photo/${product._id}`}
        />
      </td>
      <td className="ant-table-cell">{product.name}</td>
      <td className="ant-table-cell">{product.price}</td>
      <td className="ant-table-cell">{product.category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" value={count} onChange={handleChange} />
      </td>
      <td className="ant-table-cell">
        <Button
          onClick={() => setCart(removeGoodsFromCart(product))}
          danger
          type="primary"
        >
          删除
        </Button>
      </td>
    </tr>
  )
}

export default CartItem
