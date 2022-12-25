import React, { Fragment } from 'react'
import ReactDom from 'react-dom';

import Cart from '../Cart/Cart'
import styles from './Modal.module.css'

export const ModalUl = () => {
    return (
        <Fragment>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <Cart />
            </div>
        </Fragment>
    )
}

const Modal = () => {
    return (
        <Fragment>
            {ReactDom.createPortal(
                <ModalUl />,
                document.getElementById('modal')
            )}
        </Fragment>
    )
}

export default Modal