import './App.css';
import Header from './components/Header';
import CreateTask from './components/CreateTask';
import TasksContainer from './components/TasksContainer';

function App() {
  return (
    <div className="background">
      <div className="container">
        <Header></Header>
        <CreateTask></CreateTask>
        <TasksContainer></TasksContainer>
      </div>
    </div>
  );
}

export default App;
