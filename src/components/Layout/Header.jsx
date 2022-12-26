import { Fragment, useState } from 'react'
import ButtonHeader from './ButtonHeader'

import styles from './Header.module.css'
import mealsPic from '../../assets/meals.jpg'


const Header = (props) => {

  return (
    <Fragment>
      <header className={styles.header}>
        <h2>ReactMeals</h2>
        <ButtonHeader />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsPic} alt="Meals" />
      </div>
    </Fragment>
  )
}

export default Header