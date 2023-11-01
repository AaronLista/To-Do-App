import { useLocalStorage } from './customsHooks/useLocalStorage'
import React from 'react';
import { AppUI } from './AppUI';

function App() {

  let defaultTodos = [
    {
      id:1,
      text:"hola mundo",
      complete: false
    },
    {
      id:2,
      text:"Esto es lo maximo",
      complete: false
    },
    {
      id:3,
      text:"Como estan?",
      complete: false
    }

  ]

  const {item:todos,saveItem:setTodos,loading,err} = useLocalStorage('tareas',defaultTodos)
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


  return (
    <AppUI
        todos =  {todos}
        searchValue =  {searchValue}
        setSearchValue = { setSearchValue }
        searchesTodos = { searchesTodos }
        searchText = { searchText }
        completeTodo = { completeTodo }
        deleteTodo = {deleteTodo}
        loading={loading}
        err={err}
    />
  );
}

export default App;
