import React from "react";
import './TodoSearch.css'


function TodoSearch({searchValue, setSearchValue}){    
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