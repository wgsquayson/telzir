import React from 'react';
import styles from './styles.module.css';
import logo from '../../images/logo.png'

export default function Header() {
    return(
        <div className={styles.container}>
            <div style={{ display: 'flex', alignItems:'center' }}>
                <img src={logo} alt="" className={styles.logo}/>
                <h1 className={styles.telzir}>telzir</h1>
            </div>
            <div className={styles.headerLinks}>
                <p>Nossos Planos</p>
                <p>A Empresa</p>
                <p>Fale Conosco</p>
            </div>
        </div>
    )
}