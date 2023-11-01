import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../Context/TodoContext';

function TodoCounter(){

    const {todos:tasks, loading} = React.useContext(TodoContext)

    return (

        loading? 

        <h1>Cargando tareas...</h1>

        :

        tasks.filter(todo=>todo.complete).length === tasks.length?
    
        <h1>Se han completado todas las tareas</h1>

        :

        <h1>se han completado {tasks.filter(todo=>todo.complete).length} de {tasks.length} tareas</h1>
    
    )
}

export {TodoCounter};