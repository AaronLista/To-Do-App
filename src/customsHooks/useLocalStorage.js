import React from "react";

function useLocalStorage(nombre, defaultasks){
    let tareas = []
  
    if(localStorage.getItem(nombre)){
      tareas = JSON.parse(localStorage.getItem(nombre))
    } else {
      tareas = defaultasks
      localStorage.setItem(nombre,JSON.stringify(defaultasks));
    }
  
    const [item, setItem] = React.useState(tareas);
  
    function saveItem(newItem){
      setItem(newItem)
      localStorage.setItem(nombre,JSON.stringify(newItem))
    }
  
    return [item,saveItem]
  
}

export {useLocalStorage}