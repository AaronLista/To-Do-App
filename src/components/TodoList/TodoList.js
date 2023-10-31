import './TodoList.css'

function TodoUl(props){
    return(<ul style={{listStyle:'none'}}>
        {props.children}
    </ul>)
}

export {TodoUl}