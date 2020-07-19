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
        <div className={styles.bannerSplit}>
          <p>Escolha o seu!</p>
        </div>
        <div className={styles.secondBanner}>
          <div className={styles.leftSide}>

          </div>
          <div className={styles.offersContainer}>
            <div className={styles.offersGroup}>
              <p>FALE</p>
              <p>MAIS</p>
              <p>30</p>
            </div>
            <div className={styles.offersGroup}>
              <p>FALE</p>
              <p>MAIS</p>
              <p>60</p>
            </div>
            <div className={styles.offersGroup}>
              <p>FALE</p>
              <p>MAIS</p>
              <p>120</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
