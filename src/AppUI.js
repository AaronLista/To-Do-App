import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoUl } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { Loading } from './components/Loading/Loading';
import { TodoContext } from './components/Context/TodoContext';
import './App.css';

function AppUI(){
    return(
        <div className='App'>
        <div className='rigth'>
          {/* <TodoCounter/>
          <TodoSearch/> */}
  
        <TodoContext.Consumer>
            {({
                todos,
                searchValue,
                setSearchValue,
                searchesTodos,
                searchText,
                completeTodo,
                deleteTodo,
                loading,
                err
            })=>(
                <TodoUl>
                    {loading? <Loading/>:''}
                    {err? <p>hubo un error</p>:''}
                    {(!loading && !searchesTodos.length > 0)? <p>No hay tareas aun...</p>:''}
            
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
            )}
        </TodoContext.Consumer>

        </div>
      </div>
    )
}

export {AppUI}