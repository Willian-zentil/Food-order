import React from 'react'
import MealItemForm from './MealItemForm'
import styles from './MealItem.module.css'

const MealItem = props => {
    return (
        <li key={props.meal.id} className={styles.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <span className={styles.description}>{props.meal.description}</span>
                <span className={styles.price}>{props.meal.price}</span>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}

export default MealItem