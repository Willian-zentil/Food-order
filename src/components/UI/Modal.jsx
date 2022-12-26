import React, { Fragment } from 'react'
import ReactDom from 'react-dom';

import styles from './Modal.module.css'

const Backdrop = props => {

    return (
        <div className={styles.backdrop}></div>
    )
}

const ModalUl = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, document.getElementById('overlays'))}
            {ReactDom.createPortal(
                <ModalUl>{props.children}</ModalUl>,
                document.getElementById('overlays')
            )}
        </Fragment>
    )
}

export default Modal