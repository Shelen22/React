import React from 'react'

function GroceryList({title,status, id, deleteItem}) {
    return (
        <div>
            <h2>
            {title}
            <button onClick={ () => deleteItem(id)} >Delete</button>
        </h2>   
        </div>
    )
}

export default GroceryList
