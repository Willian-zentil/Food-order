import React, { useContext } from 'react'
import CartContext from '../../../Context/cart-context'
import MealItemForm from './MealItemForm'
import styles from './MealItem.module.css'

const MealItem = props => {
    const ctxCart = useContext(CartContext)
    const addToCartHandler = (amount) => {
        ctxCart.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price
        })
    }

    return (
        <li key={props.meal.id} className={styles.meal}>
            <div className={styles.column}>
                <h3>{props.meal.name}</h3>
                <span className={styles.description}>{props.meal.description}</span>
                <span className={styles.price}>{props.meal.price}</span>
            </div>
            <div>
                <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem