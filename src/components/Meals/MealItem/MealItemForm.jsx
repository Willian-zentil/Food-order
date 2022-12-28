import React, { useRef, useState } from 'react'
import Input from '../../UI/input'
import styles from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const numberEnteredAmount = +enteredAmount

    if(enteredAmount.trim().lenght === 0 || enteredAmount < 1 || enteredAmount > 5){
      setAmountIsValid(false)
      return
    }

    props.onAddToCart(numberEnteredAmount)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}  
        label={"Amount"}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />
      <button>+ Add</button>
      {amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm