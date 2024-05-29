import React from 'react';
import styles from './game.module.css';
import { Field, Information } from './components';

export const GameLayout = ({ handleRestart }) => (
  
    <div className={styles.game}>

      <Information />
      <Field />
      
      <button className={styles.restartButton} onClick={handleRestart}>Start New Game</button>
    </div>
)
