import {useState} from 'react';
import React from 'react';

function Counter(props){
    const [count , setCount] = useState(props.num);
     
    const changeCount = (value) =>{
        setCount(count + value);
    }
    const Multiplication = (value) =>{
        setCount(count * value)
    }
    return (
        <div>
            <h3>Counter : {count}</h3>
            <div>
            <button onClick={()=> changeCount(1)}>ADD_1</button>
            <button onClick={()=> changeCount(-1)}>Sub_1</button>
            <button onClick={()=> Multiplication(2)}>Click here</button>
            </div>
        </div>
    )
}
export { Counter }