import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoUl } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/TodoCreateButton';
import React from 'react';
import './App.css';

let tasks = [
  {
    text:"hola pa ti mis bolas",
    complete: true
  },
  {
    text:"Pene",
    complete: false
  },
  {
    text:"ta bien",
    complete: false
  }
]


function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(tasks);

  const searchesTodos = todos.filter(todo=>
    todo.text.toLowerCase()
    .includes(searchValue.toLowerCase()))

  const completeTodo = (index)=>{
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  const searchText = searchValue;

  const deleteTodo = (index)=>{
    const newTodos = [...todos]
    newTodos.pop(newTodos[index]);
    setTodos(newTodos)
  }



  return (
    <div className='App'>
      <TodoCounter 
        tasks={todos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoUl>
        {searchesTodos.map((todo,index)=>(
          <TodoItem  
            sText = {searchText}
            text = {todo.text}
            complete = {todo.complete}
            onComplete = {()=>completeTodo(index)}
            onDelete = {()=>deleteTodo(index)}
            key={index}
          />
        ))}
      </TodoUl>

      <CreateTodoButton/>
    </div>
  );
}

export default App;
