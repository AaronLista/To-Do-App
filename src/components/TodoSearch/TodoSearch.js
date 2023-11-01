import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../Context/TodoContext";


function TodoSearch(){    
    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    return(<
        input type="text" 
        placeholder="Find a task" 
        value={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value)
        }}
        ></input>)
}

export {TodoSearch};