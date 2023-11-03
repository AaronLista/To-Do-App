import React from "react";

function useLocalStorage(nombre, defaultasks){

  const [item, setItem] = React.useState(defaultasks);

  const [loading, setLoading] = React.useState(true);

  const [err, setErr] = React.useState(false)

    React.useEffect(()=>{
      var tareas = []
      setTimeout(()=>{
        try {
          if(JSON.parse(localStorage.getItem(nombre)).length > 0){
            tareas = JSON.parse(localStorage.getItem(nombre));
            setLoading(false);
            setItem(tareas)
          } else {
            localStorage.setItem(nombre,JSON.stringify(defaultasks));
            setItem(defaultasks)
            setLoading(false);
          }
        } catch (error) {
          setErr(true)
        }

      },1000)
    },[nombre,defaultasks])
    
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