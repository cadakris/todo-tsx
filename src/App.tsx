import React, { useState } from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';

export const App = () => {

  const[showAddTodoform, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
      {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
      {rowNumber: 2, rowDescription: 'Get haircut', rowAssigned: 'User Two'},
      {rowNumber: 3, rowDescription: 'Buy groceries', rowAssigned: 'User One'},
      {rowNumber: 4, rowDescription: 'Clean kitchen', rowAssigned: 'User One'}
  ])

  const addTodo = (description:string, assigned:string) => {
    let rowNumber = 0;
    if(todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
      const newTodo= {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function(value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered); 
  }

  return (
    // mt-5 means will push application down, container cuts off edges
    <div className = "mt-5 container">
      <div className = "card">
        <div className = "card-header">
          Your Todo's
        </div>
        <div className = "card-body">
          <TodoTable todos = {todos} deleteTodo={deleteTodo}/>
          <button onClick={() => setShowAddTodoForm(!showAddTodoform)}  className='btn btn-primary'>{showAddTodoform ? "Close New Todo" : "New Todo"}</button>
          {showAddTodoform && 
          <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}


