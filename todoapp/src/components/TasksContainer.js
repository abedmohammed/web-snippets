import React from 'react';
import styles from './TasksContainer.module.css';

import Task from './Task';

export default function Tasks() {
  return (
    <main className={styles['tasks-container']}>
      <Task text="Jog around the park 3x"></Task>
      <Task text="10 minutes meditation"></Task>
      <Task text="Read for 1 hour"></Task>
      <menu className={styles.menu}></menu>
    </main>
  );
}
