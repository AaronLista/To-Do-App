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