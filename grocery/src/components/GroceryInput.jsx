import React from 'react'
import { useState } from "react";

function GroceryInput({getData}) {
    const [text, setText] = useState("");
    const handleChange = (e) =>{
        setText(e.target.value);
    }

    const handleClick = () =>{
        getData(text)
    }
    return (
        <div>
        <>
        <input placeholder="Enter Todo" onChange = {handleChange}/>
        <button onClick={handleClick}>Add Todo</button>
        </>
        </div>
    )
}

export default GroceryInput
