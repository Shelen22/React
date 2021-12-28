import React from 'react';
import {useState} from "react";
import {nanoid} from "nanoid";
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';

function Grocery() {
    const [list , setList] = useState([]);
      const handleclick = (data) =>{
        //   console.log("data in parent" , data);
          const payload = {
              title: data,
              status : false,
              id : nanoid(4), 
          };
          setList([...list, payload])
      }
      const handledelete = (id) => {
        const updatedList = list.filter((curElem) => {
            return (curElem.id !== id)
        });

        setList(updatedList)
      }
    return (
        <div>
            <>
           <GroceryInput getData = {handleclick} />
           {list.map((e) => <GroceryList key = {e.id} {...e} deleteItem = {handledelete} />)}
          </>
        </div>
    )
}

export default Grocery
