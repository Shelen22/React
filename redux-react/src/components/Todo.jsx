
import { useSelector, useDispatch  } from "react-redux"

export const Todos = () => {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch()
  const handleinput = (e) => {
    setText(e.target.value);
  };
  const handleTodo = () =>{
     fetch("http://localhost:3004/todos", {
         method: "POST",
         body: JSON.stringify({status:false, title:text}),
     })
  }
  return (
    <div>
      <input type="text" placeholder="Enter Todo" onChange={handleinput} />
      <button onClick={handleTodo}>Add Todo</button>
      {todos.map((e)=>(
          <div>{e}</div>
      ))}
    </div>
  );
};
