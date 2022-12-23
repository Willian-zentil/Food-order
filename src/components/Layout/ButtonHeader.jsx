import React from 'react';
import CartIcon from '../UI/CartIcon'
import styles from './ButtonHeader.module.css';


const ButtonHeader = () => {
  return (
    <div className={styles.button}>
      <span className={styles.icon}><CartIcon/></span>
      <span>Your Cart</span>
      <div className={styles.badge}>0</div>
    </div>
  )
}

export default ButtonHeader