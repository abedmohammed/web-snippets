import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import TasksContainer from './components/TasksContainer';

function App() {
  const [tasksData, setTasksData] = useState([]);

  const createTaskHandler = (task) => {
    setTasksData((prevState) => [...prevState, task]);
  };

  const changeStatusHandler = (task) => {
    setTasksData((prevState) => {
      const pos = prevState.findIndex((oldTask) => task.id === oldTask.id);

      const newStatus =
        prevState[pos].status === 'active' ? 'completed' : 'active';

      return [
        ...prevState.slice(0, pos),
        { ...task, status: newStatus },
        ...prevState.slice(pos + 1),
      ];
    });
  };

  const removeTaskHandler = (task) => {
    setTasksData((prevState) => {
      return prevState.filter((oldTask) => task.id !== oldTask.id);
    });
  };

  return (
    <div className="background">
      <div className="container">
        <Header></Header>
        <CreateTask onCreate={createTaskHandler}></CreateTask>
        <TasksContainer
          onStatusChange={changeStatusHandler}
          onDelete={removeTaskHandler}
          tasksList={tasksData}></TasksContainer>
      </div>
    </div>
  );
}

export default App;
