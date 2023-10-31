import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoUl } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import React from 'react';
import './App.css';


function useLocalStorage(nombre, defaultasks){
  let tareas = []

  if(localStorage.getItem(nombre)){
    console.log('hay tareas')
    tareas = JSON.parse(localStorage.getItem(nombre))
  } else {
    console.log('no hay tareas');
    tareas = defaultasks
    localStorage.setItem(nombre,JSON.stringify(defaultasks));
  }

  const [item, setItem] = React.useState(tareas);

  function saveItem(newItem){
    setItem(newItem)
    localStorage.setItem(nombre,JSON.stringify(newItem))
  }

  return [item,saveItem]

}


function App() {
  let defaultTodos = [
    {
      id:1,
      text: 'tarea 1',
      complete: false
    },
    {
      id:2,
      text: 'tarea 2',
      complete: false
    },
    {
      id:3,
      text: 'tarea 3',
      complete: false
    }
  ]

  const [todos,setTodos] = useLocalStorage('tareas',defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const searchesTodos = todos.filter(todo=>
    todo.text.toLowerCase()
    .includes(searchValue.toLowerCase()))

  const completeTodo = (id)=>{
    const newTodos = [...todos];
    newTodos.find((todo)=>todo.id === id).complete = !newTodos.find((todo)=>todo.id === id).complete;
    setTodos(newTodos)
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
