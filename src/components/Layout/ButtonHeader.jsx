import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../UI/CartIcon'
import CartContext from '../../Context/cart-context';
import styles from './ButtonHeader.module.css';


const ButtonHeader = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted]= useState(false)
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : ''}`

  useEffect(()=>{
    if(items.lenght === 0){
      return 
    }
    setBtnIsHighLighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (  
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}><CartIcon /></span>
      <span >Your Cart</span>
      <div className={styles.badge}>{numberOfCartItems}</div>
    </button>
  )
}

export default ButtonHeader