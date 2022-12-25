import React, {Fragment} from 'react'

import styles from './input.module.css'

const input = props => {
  return (
    <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
  )
}

export default input