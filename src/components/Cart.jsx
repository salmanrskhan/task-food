import React, { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from './store/CartContext';
import { currencyFormatter } from './utils/formatting';
import Button from './UI/Button';
import UserProgressContext from './store/UserProgressContext';
import CartItem from './CartItem';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    )

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    return (
        <Modal className='cart' open={userProgressCtx.progress === 'cart'}>
            <h2>YOur Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        OnDecrease={() => cartCtx.removeItem(item.id)}
                        OnIncrease={() => cartCtx.addItem(item)}
                    />
                ))}
            </ul>
            <p className="cart-total">Total = {currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && (
                    <Button onClick={handleCloseCart}>Go to checkout</Button>
                )}

            </p>
        </Modal>
    )
}

export default Cart;