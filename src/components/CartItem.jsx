import React from 'react';
import { currencyFormatter } from './utils/formatting';

const CartItem = ({ name, quantity, price, OnIncrease, OnDecrease }) => {
  return (
    <li className='cart-item'>
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={OnDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={OnIncrease}>+</button>
      </p>
    </li>
  )
}

export default CartItem;