import React from 'react';
import styles from './CreateTask.module.css';

import Card from './card/Card';

export default function CreateTask() {
  return (
    <Card className={styles.create} isClickable={false}>
      <input
        type="text"
        className={styles['create__input']}
        placeholder="Create a new todo..."
      />
    </Card>
  );
}
