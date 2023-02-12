import React, { useState } from 'react';
import styles from './CreateTask.module.css';

import Card from './card/Card';

export default function CreateTask(props) {
  const [taskName, setTask] = useState('');

  const taskTextHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCreate({
      task: taskName,
      status: 'active',
      id: `${taskName}_${new Date().getTime()}`,
    });
    setTask('');
  };

  return (
    <Card className={styles.create} isClickable={false}>
      <form className={styles['create__form']} onSubmit={submitHandler}>
        <input
          type="text"
          onChange={taskTextHandler}
          value={taskName}
          className={styles['create__input']}
          placeholder="Create a new todo..."
        />
      </form>
    </Card>
  );
}
