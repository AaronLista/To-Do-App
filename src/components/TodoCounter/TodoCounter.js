import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../Context/TodoContext';

function TodoCounter(){

    const {todos:tasks, loading} = React.useContext(TodoContext)

    return (

        loading? 

        <h2>Cargando tareas...</h2>

        :

        tasks.filter(todo=>todo.complete).length === tasks.length?
    
        <h2>Se han completado todas las tareas</h2>

        :

        <h2>se han completado {tasks.filter(todo=>todo.complete).length} de {tasks.length} tareas</h2>
    
    )
}

export {TodoCounter};