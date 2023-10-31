import React from "react";

function useLocalStorage(nombre, [defaultasks]){

  const [item, setItem] = React.useState(defaultasks);

  const [loading, setLoading] = React.useState(true);

  const [err, setErr] = React.useState(false)

  var tareas = []

    React.useEffect(()=>{

      if(localStorage.getItem(nombre)){
        tareas = JSON.parse(localStorage.getItem(nombre))
        setItem(tareas)
      } else {
        tareas = defaultasks
        localStorage.setItem(nombre,JSON.stringify(tareas));
      }

      setLoading(false);
      setItem(tareas)
    },[])
    
    function saveItem(newItem){
      setItem(newItem)
      localStorage.setItem(nombre,JSON.stringify(newItem))
    }
  
    return {
            item,
            saveItem, 
            loading, 
            err
          }
  
}

export {useLocalStorage}