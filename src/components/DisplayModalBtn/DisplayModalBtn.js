import React from "react";
import { TodoContext } from "../Context/TodoContext";
import './DisplayModalBtn.css'

function DisplayModalBtn(){
        const {toggleModal, setToggleModal, loading} = React.useContext(TodoContext)
    return(
        <button disabled={loading}
            className="displayBtn"
            onClick={()=>{setToggleModal(!toggleModal)}}
        >
            +
        
        </button>
    )
}

export {DisplayModalBtn}