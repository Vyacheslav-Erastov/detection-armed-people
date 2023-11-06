import React from 'react';
import { tasks } from './data';
import Task from './components/Task';

function App() {
  return (
    <div>
      <Task task={tasks[0]} />
    </div>
  );
}

export default App;
