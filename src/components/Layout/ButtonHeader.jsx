import React, { useState, useContext, Fragment } from 'react';
import CartContext from '../../Context/cart-context';
import CartIcon from '../UI/CartIcon'
import styles from './ButtonHeader.module.css';


const ButtonHeader = (props) => {
  const ctx = useContext(CartContext)
  const [openCart, setOpenCart] = useState(false)

  const handlerOpenCart = () => {
    setOpenCart(true)
  }

  console.log('ctxxxx', ctx)

  return (
    <Fragment>
      {!ctx ? '' : 
        <div className={styles.button} onClick={handlerOpenCart}>
          <span className={styles.icon}><CartIcon /></span>
          <span >Your Cart</span>
          <div className={styles.badge}>0</div>
        </div>}
    </Fragment>
  )
}

export default ButtonHeader