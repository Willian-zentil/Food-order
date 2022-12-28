import React, { useContext } from 'react'
import CartContext from '../../Context/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import styles from './Cart.module.css'

const Cart = (props) => {
    const ctxCart = useContext(CartContext)

    const totalAmount = `$${ctxCart.totalAmount.toFixed(2)}`
    const hasItems = ctxCart.items.length > 0

    const cartItemRemoveHandler = id => {
        ctxCart.removeItem(id)
    }

    const cartItemAddHandler = item => {
        ctxCart.addItem(item)
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {ctxCart.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );


    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems &&<button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart