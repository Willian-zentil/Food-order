import React from 'react'
import styles from './Cart.module.css'

const Cart = (props) => {
    const itens = [{ id: '1', name: 'sushi', amount: 2, price: '12.99' }].map(item => {
        <li key={itens.id}>
            <span>{itens.name}</span>
            <div>${itens.price}</div>
            <div>x{itens.amount}</div>
            <div className={styles.actions}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    })


    return (
        <div>
            <ul className={styles['cart-items']}>
                {itens}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>$33.00</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </div>
    )
}

export default Cart