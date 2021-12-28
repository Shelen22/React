import React from 'react'

function GroceryList({title,status, id}) {
    return (
        <div>
            <h2>
            {title} - {status? "Done" : "Not-done"}
        </h2>   
        </div>
    )
}

export default GroceryList
