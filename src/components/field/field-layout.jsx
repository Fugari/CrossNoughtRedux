import React from 'react';
import styles from './field.module.css';
import { PLAYER_SIGN } from '../../constants';

export const FieldLayout = ({ field, handleClick }) => (

    <div className={styles.field}>{field.map((cellPlayer, index) => (
      <button
        key={index}
        className={styles.cell}
        onClick={() => handleClick(index)}>
        {PLAYER_SIGN[cellPlayer]}
      </button>
    ))}</div>
)
