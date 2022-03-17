import React, { useState } from 'react';
import ToDoContext from './ToDoContext';

function ToDo({ children }) {
  const [tasks, setTasks] = useState([]); // Passando o estado e uma função para alterar o estado.
  const [counter, setCounter] = useState(0);

  const addTask = (newTask) => {
      const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setCounter(newTasks.length);
  }

  const removeTask = (taskToRemove) => {
    const newTasks = [...tasks.filter((task) => task !== taskToRemove)];
    setTasks(newTasks);
    setCounter(newTasks.length);
  }

  const contextValue = {
      tasks,
      counter,
      setCounter,
      addTask,
      removeTask,
  };

  return (
    <ToDoContext.Provider value={contextValue}>
      { children }
    </ToDoContext.Provider>
  )
}

export default ToDo;