import React from 'react';
import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
function App() {
  return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="container mx-auto px-3">
          <TodoForm />
          <TodoList />
        </div>
      </div>
  );
}

export default App;
