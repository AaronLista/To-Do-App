import React from "react";
import { useLocalStorage } from "../../customsHooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {

    let defaultTodos = []

    const {item:todos,saveItem:setTodos,loading,err} = useLocalStorage('tareas',defaultTodos)
    const [searchValue, setSearchValue] = React.useState('');
    const [toggleModal, setToggleModal] = React.useState(false)
    
    const searchesTodos = todos.filter(todo=>
      todo.text.toLowerCase()
      .includes(searchValue.toLowerCase()))

    const searchText = searchValue;
  
    const completeTodo = (id)=>{
      const newTodos = [...todos];
      newTodos.find((todo)=>todo.id === id).complete = !newTodos.find((todo)=>todo.id === id).complete;
      setTodos(newTodos)
    }
  
    const deleteTodo = (id)=>{
      const newTodos = [...todos];
      const todo = newTodos.find((todo)=>todo.id === id);
      const index = newTodos.indexOf(todo)
      newTodos.splice(index,1)
      setTodos(newTodos)
    }

    const createTodo = (todoText)=>{
      if(todos.length > 0){
        const newTodos = [...todos];
        let lastTodo = newTodos[newTodos.length-1];
        const newId = lastTodo.id+1;
        const newTodo = {
          id:newId,
          text:todoText,
          complete:false
        }
        newTodos.push(newTodo);
        setTodos(newTodos)
      } else {
        const newTodos = [...todos];
        const newTodo = {
          id:1,
          text:todoText,
          complete:false
        }
        newTodos.push(newTodo);
        setTodos(newTodos)
      }
    }
  
  
    return(
        <TodoContext.Provider value={
            {
                todos,
                searchValue,
                setSearchValue,
                searchesTodos,
                searchText,
                completeTodo,
                deleteTodo,
                createTodo,
                loading,
                err,
                toggleModal,
                setToggleModal
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}