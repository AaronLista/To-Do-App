import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import './TodoForm.css'


function TodoForm(){
    const {toggleModal, setToggleModal,createTodo} = React.useContext(TodoContext)
    const [todoText, setTodoText] = React.useState('')

    return(
        <div className="formContainer">
            <h2>Crear Nueva Tarea</h2>
            <form>
                <div className="inputContainer">
                    <label>Nueva Tarea:</label><br/>
                    <input type='text' placeholder='Tarea' value={todoText} onChange={(e)=>{setTodoText(e.target.value)}}/>
                </div>
                <div className='inputContainer btnContainer'> 
                    <input type='submit' value='Guardar' className='Btn submit' onClick={(e)=>addTask(e,setToggleModal,toggleModal,createTodo,todoText)}/>
                    <input type='button' value='Cancelar' className='Btn cancel' onClick={(e)=>cancel(e,setToggleModal,toggleModal)}/>
                </div>
            </form>
        </div>
    )
}

function cancel(event, setToggleModal, toggleModal){
    event.preventDefault();
    setToggleModal(!toggleModal)
}

function addTask(event, setToggleModal, toggleModal, createTodo, text){
    event.preventDefault();
    createTodo(text);
    setToggleModal(!toggleModal);
}

export {TodoForm}