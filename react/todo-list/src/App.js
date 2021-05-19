import './App.css';
import React, { useState,useEffect } from 'react'; 
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo-List</p>
        <TodoForm addTodo = {addTodo}  />
        <TodoList todos = {todos} />
      </header>
    </div>
  );
}

export default App;
