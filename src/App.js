import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import TaskCreateForm from './components/TaskCreateForm';
import TaskTable from './components/TaskTable';
import tasksList from './data';
import Navigation from './components/Navigation';

const App = () => {

  const [tasks, setTasks] = useState(tasksList);

  const createTask = task => {
      task._id = tasks.length;
      const arr = [...tasks];
      arr.push(task);
      setTasks(arr);
  };

  const updateTask = task => {
    const arr = [...tasks];
    arr[task._id] = task;
    setTasks(arr);
  };

  const deleteTask = tasksId => {
    setTasks(tasks.filter((m) => m._id !== tasksId));
  };

  return (
    <Router>
      <Container>
      <Navigation />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/add">
            <TaskCreateForm createTask={createTask}/>
          </Route>
          <Route exact path="/list">
            <TaskTable tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;