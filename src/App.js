import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoUl } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { Formulario } from './components/formulario';
import { CreateTodoButton } from './components/TodoCreateButton';
import React from 'react';
import './App.css';

let tasks = [
  {
    id: 0,
    text:"hola pa ti mis bolas",
    complete: true
  },
  {
    id: 2,
    text:"Pene",
    complete: false
  },
  {
    id: 3,
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

  const completeTodo = (id)=>{
    const newTodos = [...todos];
    newTodos.find((todo)=>todo.id === id).complete = !newTodos.find((todo)=>todo.id === id).complete
    setTodos(newTodos);
  }

  const searchText = searchValue;

  const deleteTodo = (id)=>{
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=>todo.id === id);
    const index = newTodos.indexOf(todo)
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const createTodo = (info)=>{
    const newTodos = [...todos]
    const newTodo = {text:info, complete:false}
    newTodos.push(newTodo);
    setTodos(newTodos)
  }



  return (
    <div className='App'>
      {/* <div className='left'>
          <Formulario
            onCreate={createTodo}
          />
      </div> */}
      <div className='rigth'>
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
              onComplete = {()=>completeTodo(todo.id)}
              onDelete = {()=>deleteTodo(todo.id)}
              key={index}
            />
          ))}
        </TodoUl>
      </div>
    </div>
  );
}

export default App;
