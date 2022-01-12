
import { useSelector, useDispatch  } from "react-redux";
import { useState } from "react";
import { addTodoLoading, addTodoSuccess, addTodoError } from "../store/action";
 
export const Todos = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()
  const handleinput = (e) => {
    setText(e.target.value);
  };
  const handleTodo = () =>{
      dispatch(addTodoLoading())
     fetch("http://localhost:3006/todos", {
         method: "POST",
         body: JSON.stringify({status:false, title:text}),
         headers: {'Content-Type': 'application/json'}
     })
     .then((d) => d.json())
     .then((res) =>{
         dispatch(addTodoSuccess(res))
     })
     .catch((err) =>{
         dispatch(addTodoError(err))
     })
  }
  return (
    <div>
      <input value ={text} type="text" placeholder="Enter Todo" onChange={handleinput} />
      <button onClick={handleTodo}>Add Todo</button>
      {todos.map((e)=>(
          <div>{e.title}</div>
      ))}
    </div>
  );
};
