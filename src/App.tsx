import React from 'react';
import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";
function App() {
  return (
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="bg-gray-100 text-black pb-3">
          <Header />
          <div className="app-body container mx-auto px-3">
            <TodoForm />
            <TodoList />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App;
