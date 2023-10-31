import './TodoCounter.css'

function TodoCounter({tasks}){
    return (
    
    tasks.filter(todo=>todo.complete).length === tasks.length?
    
    <h1>se han completado todas las tareas</h1>:
    <h1>se han completado {tasks.filter(todo=>todo.complete).length} de {tasks.length} tareas</h1>
    
    )
}

export {TodoCounter};