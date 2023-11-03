import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import './TodoForm.css'


function TodoForm(){
    const {setToggleModal,createTodo} = React.useContext(TodoContext);
    const [text, setText] = React.useState('')

    function submitTask(event){
        event.preventDefault();
        createTodo(text);
        setToggleModal(false);
    }

    
    function cancel(event){
        event.preventDefault();
        setToggleModal(false)
    }

    return(
        <div className="formContainer">
            <h2>Crear Nueva Tarea</h2>
            <form onSubmit={(e)=>{submitTask(e)}}>
                <div className="inputContainer">
                    <label>Nueva Tarea:</label><br/>
                    <input type='text' placeholder='Tarea' value={text} onChange={(e)=>{setText(e.target.value)}}/>
                </div>
                <div className='inputContainer btnContainer'> 
                    <input type='button' value='Cancelar' className='Btn cancel' onClick={(e)=>cancel(e)}/>
                    <input type='submit' value='Guardar' className='Btn submit' />
                </div>
            </form>
        </div>
    )
}


export {TodoForm}