import React, {useState} from 'react';
import styles from './styles.module.css';
import Header from '../components/Header';
import PhoneCall from '../images/phonecall.svg';
import BusinessWoman from '../images/businesswoman.svg';
import Select from 'react-select';


function App() {
  const [plan, setPlan] = useState([]);
  const [initialDDD, setInitialDDD] = useState('');
  const [finalDDD, setFinalDDD] = useState('');
  const [inputMinutes, setInputMinutes] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log([plan, initialDDD, finalDDD, inputMinutes]);
  }

  function handlePlanChange(value) {
    console.log(value)
  }

  const plans = [
    { value: 'FaleMais30', label: 'FaleMais 30' },
    { value: 'FaleMais60', label: 'FaleMais 60' },
    { value: 'FaleMais120', label: 'FaleMais 120' }
  ]

  const ddds = [
    { value: '011', label: '011' },
    { value: '016', label: '016' },
    { value: '017', label: '017' },
    { value: '018', label: '018' }
  ]
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.banner}>
          <p className={styles.beforeTitle}>Conheça nosso novo plano!</p>
          <p className={styles.title}>FALE</p>
          <p className={styles.title}>MAIS</p>
        </div>
        <div className={styles.about}>
          <img src={PhoneCall} alt="Phone Call" style={{ width: '55%' }} />
          <div className={styles.aboutText}>
            <p>Com o FaleMais, você escolhe o<br />tamanho do plano<br />e fala de graça.</p>
          </div>
        </div>
        <div className={styles.priceSection}>
          <form onSubmit={handleSubmit}>
            <p className={styles.priceSectionTitle}>Calcule o seu custo agora!</p>
            <p>Escolha o plano:</p>
            <Select 
              options={plans} 
              placeholder="Selecione..."
              onChange={handlePlanChange}
              required 
            />
            <div className={styles.formGroup}>
              <div>
                <p>Escolha o DDD de origem:</p>
                <Select 
                  options={ddds} 
                  placeholder="Selecione..."
                  onChange={e => setInitialDDD(e.target.value)}
                  required 
                />
              </div>
              <div>
                <p>Escolha o DDD de destino:</p>
                <Select 
                  options={ddds} 
                  placeholder="Selecione..."
                  onChange={e => setFinalDDD(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div>
                <p>Digite a quantidade de <br />minutos que deseja falar:</p>
                <input 
                  className={styles.minutesInput} 
                  type="text" 
                  value={inputMinutes}
                  onChange={e => setInputMinutes(e.target.value)}
                  required
                />
              </div>
              <button>Calcular!</button>
            </div>
          </form>
          <img src={BusinessWoman} alt="" style={{ width: '45%' }} />
        </div>
      </div>
    </div>
  );
}

export default App;
