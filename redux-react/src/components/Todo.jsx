
import { useSelector, useDispatch  } from "react-redux";
import { useState,useEffect } from "react";
import { addTodoLoading, addTodoSuccess, addTodoError,removeTodo, getTodoSuccess, getTodoLoading, getTodoError } from "../store/action";
 
export const Todos = () => {
  const [text, setText] = useState("");
  const { loading, todos, error } = useSelector((state) =>({
      loading: state.loading,
      todos: state.todos,
      error: state.error
  }));
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
         dispatch(addTodoSuccess(res));
         getTodo()
         setText("")
     })
     .catch((err) =>{
         dispatch(addTodoError(err))
     })
    
  }
  const handleDelete = (id) =>{
    // dispatch(addTodoLoading())
   fetch(`http://localhost:3006/todos/${id}`, {
       method: "DELETE",
   })
   .then((res) =>{
       dispatch(removeTodo(res))
       getTodo();
   })
   .catch((err) =>{
       dispatch(addTodoError(err))
   })
  
}

useEffect(() =>{
    getTodo();
},[]) 
async function getTodo(){
    try{
        dispatch(getTodoLoading())
await fetch("http://localhost:3006/todos")
.then((d) => d.json())
.then((res) =>{
    dispatch(getTodoSuccess(res))
})
    }catch (err){
        dispatch(getTodoError(err))
    }
}

// const handleEdit = (id) =>{
//     dispatch(addTodoLoading())
//    fetch(`http://localhost:3006/todos/${id}`, {
//        method: "PATCH",
//        body: JSON.stringify({status:false, title:text}),
//        headers: {'Content-Type': 'application/json'}
//    })
//    .then((d) => d.json())
//    .then((res) =>{
//        dispatch(addTodoSuccess(res));
//        getTodo()
//        setText("")
//    })
//    .catch((err) =>{
//        dispatch(addTodoError(err))
//    })
  
// }
  return (
      loading ? (
          <div>Loading.....</div>
      ):error ?(<div>Something went wrong</div>):
    <div>
      <input value ={text} type="text" placeholder="Enter Todo" onChange={handleinput} />
      <button onClick={handleTodo}>Add Todo</button>
      {todos.map((e)=>(
          <div>{e.title}-{e.status ? "Done" : "Not Done"}
          {/* <button onClick ={() =>{handleEdit(e.id)}}>Edit</button> */}
          <button onClick={() =>{handleDelete(e.id)}}>Delete</button>
          </div>    
      ))}
      
    </div>
  );
};
