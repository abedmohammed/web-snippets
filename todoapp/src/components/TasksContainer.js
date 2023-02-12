import React, { useState } from 'react';
import styles from './TasksContainer.module.css';

import Task from './Task';

export default function Tasks(props) {
  const [statusFilter, setStatusFilter] = useState('none');

  const setFilterHandler = (e) => {
    setStatusFilter(e.target.dataset.filter);
  };

  const clearCompletedhandler = () => {
    props.tasksList.forEach((task) => {
      task.status === 'completed' && props.onDelete(task);
    });
  };

  const tasksList = (list, filter = 'none') => {
    const filteredList =
      filter !== 'none' ? list.filter((item) => item.status === filter) : list;

    return filteredList.map((item) => {
      return [
        <Task
          onStatusChange={props.onStatusChange}
          onDelete={props.onDelete}
          item={item}
          text={item.task}
          status={item.status}
          key={item.id}
        />,
      ];
    });
  };

  return (
    <main className={styles['tasks-container']}>
      {tasksList(props.tasksList, statusFilter)}
      <menu className={styles.menu}>
        <p className={styles['menu__remaining']}>
          {tasksList(props.tasksList, 'active').length} items left
        </p>
        <button
          onClick={setFilterHandler}
          data-filter="none"
          className={`${styles['menu__filter']} ${
            statusFilter === 'none' ? styles['menu__filter--active'] : ''
          }`}>
          All
        </button>
        <button
          onClick={setFilterHandler}
          data-filter="active"
          className={`${styles['menu__filter']} ${
            statusFilter === 'active' ? styles['menu__filter--active'] : ''
          }`}>
          Active
        </button>
        <button
          onClick={setFilterHandler}
          data-filter="completed"
          className={`${styles['menu__filter']} ${
            statusFilter === 'completed' ? styles['menu__filter--active'] : ''
          }`}>
          Completed
        </button>
        <button
          onClick={clearCompletedhandler}
          className={styles['menu__clear']}>
          Clear Completed
        </button>
      </menu>
    </main>
  );
}
