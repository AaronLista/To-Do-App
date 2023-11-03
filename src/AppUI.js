import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoUl } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { Loading } from './components/Loading/Loading';
import { TodoContext } from './components/Context/TodoContext';
import { Modal } from './components/Modal/Modal'
import './App.css';
import { DisplayModalBtn } from './components/DisplayModalBtn/DisplayModalBtn';
import { TodoForm } from './components/TodoForm/TodoForm';

function AppUI(){
    return(
        <div className='App'>
        <div className='rigth'>

        <h1>To do List</h1>

        <TodoCounter/>
        <TodoSearch/>
         
  
        <TodoContext.Consumer>
            {({
                searchesTodos,
                searchText,
                completeTodo,
                deleteTodo,
                loading,
                err,
                toggleModal
            })=>(
              <>
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

                {toggleModal? (
                  <Modal>
                    <TodoForm/>
                  </Modal>
                ):(<></>)}

              </>
            )}
        </TodoContext.Consumer>

        <DisplayModalBtn></DisplayModalBtn>

        </div>
      </div>      
    )
}

export {AppUI}