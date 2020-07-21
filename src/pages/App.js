import React from 'react';
import styles from './styles.module.css';
import Header from '../components/Header';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.banner}>
          <p className={styles.beforeTitle}>Conheça nosso novo plano!</p>
          <p className={styles.title}>FALE</p>
          <p className={styles.title}>MAIS</p>
        </div>
        <div className={styles.chooseTitle}>
          <p>Escolha o seu plano:</p>
        </div>
      </div>
    </div>
  );
}

export default App;
