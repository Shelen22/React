import React from 'react'

function GroceryList({title,status, id, deleteItem}) {
    return (
        <div>
            <h2>
            {title} - {status? "Done" : "Not-done"}
            <button onClick={deleteItem} />
        </h2>   
        </div>
    )
}

export default GroceryList
