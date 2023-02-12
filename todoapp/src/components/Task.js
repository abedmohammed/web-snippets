import React from 'react';

import cross from '../assets/images/icon-cross.svg';

import Card from './card/Card';
import styles from './Task.module.css';

export default function Task(props) {
  const circleClickHandler = () => {
    props.onStatusChange(props.item);
  };

  const deleteTaskHandler = () => {
    props.onDelete(props.item);
  };

  return (
    <Card
      isClicked={props.item.status === 'completed'}
      onClickCircle={circleClickHandler}
      isClickable={true}
      className={styles.task}>
      <p
        className={`${styles['task__text']} ${
          props.item.status === 'completed' && styles['task__completed']
        }`}>
        {props.text}
      </p>
      <img
        onClick={deleteTaskHandler}
        src={cross}
        alt="Close icon"
        className={styles['task__close']}
      />
    </Card>
  );
}
