import React from "react";
import { TodoContext } from "../Context/TodoContext";
import './DisplayModalBtn.css'

function DisplayModalBtn(){
        const {toggleModal, setToggleModal} = React.useContext(TodoContext)
    return(
        <button
            className="displayBtn"
            onClick={()=>{setToggleModal(!toggleModal)}}
        >
            +
        
        </button>
    )
}

export {DisplayModalBtn}