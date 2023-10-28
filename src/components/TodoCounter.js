import './TodoCounter.css'

function TodoCounter({tasks}){
    return (<h1>se han completado {tasks.filter(todo=>todo.complete).length} de {tasks.length}</h1>)
}

export {TodoCounter};