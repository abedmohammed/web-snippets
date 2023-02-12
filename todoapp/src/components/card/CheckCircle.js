import React from 'react';

import styles from './CheckCircle.module.css';

export default function CheckCircle(props) {
  const circleCheckHandler = () => {
    props.onClickCircle();
  };

  const displayClasses = () => {
    if (props.isClicked) return styles.clicked;

    if (props.isClickable) return styles.clickable;

    return '';
  };

  return (
    <div
      onClick={circleCheckHandler}
      className={`${styles.circle} ${displayClasses()}`}></div>
  );
}
