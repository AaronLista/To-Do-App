import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoUl } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import './App.css';

function AppUI({
    todos,
    searchValue,
    setSearchValue,
    searchesTodos,
    searchText,
    completeTodo,
    deleteTodo,
    loading,
    err
}){
    return(
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

            {loading? <p>Cargando...</p>:''}
            {err? <p>hubo un error</p>:''}

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
    )
}

export {AppUI}