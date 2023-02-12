import React from 'react';

import cross from '../assets/images/icon-cross.svg';

import Card from './card/Card';
import styles from './Task.module.css';

export default function Task(props) {
  return (
    <Card isClicked={false} isClickable={true} className={styles.task}>
      <p className={styles['task__text']}>{props.text}</p>
      <img src={cross} alt="Close icon" className={styles['task__close']} />
    </Card>
  );
}
