import React, {Fragment} from 'react'

import styles from './input.module.css'

const input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
  )
});

export default input