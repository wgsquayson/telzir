import React from 'react';
import styles from './styles.module.css';
import Close from '../../images/close.png';

export default function Modal({ handleClose, show, children }) {
    const showHideClassName = show ? styles.modalDisplayBlock : styles.modalDisplayNone;

    return (
        <div className={showHideClassName}>
            <section className={styles.modalMain}>
                {children}
                <img className={styles.img} src={Close} onClick={handleClose} alt="Fechar"/>
            </section>
        </div>
    );
};