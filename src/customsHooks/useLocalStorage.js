import React from "react";

function useLocalStorage(nombre, defaultasks){

  const [item, setItem] = React.useState(defaultasks);

  const [loading, setLoading] = React.useState(true);

  const [err, setErr] = React.useState(false)

  var tareas = []

    React.useEffect(()=>{
      setTimeout(()=>{
        
        if(JSON.parse(localStorage.getItem(nombre)).length > 0){
          tareas = JSON.parse(localStorage.getItem(nombre))
          setLoading(false);
          setItem(tareas)
        } else {
          localStorage.setItem(nombre,JSON.stringify(defaultasks));
          setItem(defaultasks)
          setLoading(false);
        }

      },5000)
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