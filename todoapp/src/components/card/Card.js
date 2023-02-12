import React from 'react';

import CheckCircle from './CheckCircle';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <CheckCircle
        onClickCircle={props.onClickCircle}
        isClicked={props.isClicked}
        isClickable={props.isClickable}
      />
      {props.children}
    </div>
  );
}
