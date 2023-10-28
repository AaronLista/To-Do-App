import './TodoItem.css';

function changeColorButton(button){
    button.style = 'background-color: red;'
}


function CreateTodoButton(){
    return(<button onClick={(event)=>{changeColorButton(event.target)}}>New item</button>)
}

export {CreateTodoButton}