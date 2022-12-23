import React from 'react'

import styles from './MealsSummary.module.css';

function MealsSummary() {
  return (
    <div className={styles.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
        <p>All our meals are cooked with hight quality ingredients, just-in-time and of course by experienced chefs!</p>
    </div>
  )
}

export default MealsSummary