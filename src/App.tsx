import React from 'react';
import TodoList from './components/TodoList';

const App: React.FunctionComponent = () => {
  const todos = [{id: "t1", text: "Finish the Course."}];

  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
