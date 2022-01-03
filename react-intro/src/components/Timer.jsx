import React from 'react'
import { useEffect, useState } from 'react';

function Timer({start , end}) {
    const [counter, setCounter] = useState(start);

    useEffect(() =>{
           const id = setInterval(()=>{
                setCounter((p) =>{
                    if(p === end){
                        clearInterval(id);
                        return 0;
                    }
                    return p+1;
                });
            },1000);

            return () =>{
                clearInterval(id);
            }
    },[])
    return (
        <div>
            Count is : {counter}
            <br/>
            {/* <button onClick={Start}>ClickStart</button> */}
        </div>
    )
}

export default Timer
