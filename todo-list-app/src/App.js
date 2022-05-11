import React, {useState} from "react"
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
 const [todos, setTodos] useState([]);

  function addTodo(todo)
 {
  setTodos([todo, ...todos]);
 }
  return (
    <div className="App">
      <header className="App-header">
        <p>Ogidan's Todo List</p>
      </header>
    </div>
  );
}

export default App;
