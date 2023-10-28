import React from "react";


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