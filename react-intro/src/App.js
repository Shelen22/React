import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1 style={{
    color :"red",
    fontSize : "24px"
   }}>Hello React</h1>
        <img src = {logo} width = {200} />
        <input /> */}
          {/* {[1,2,3,4,5].map((e) =>(
            <h1>Hello {e}</h1>
          ))} */}
          <h1>Mobile Operating System</h1>
          <ul>
           
           {mobile.map((e) =>(
            <List num = {e} /> 
           ))}
          </ul>
          <h1>Mobile Manufacturing</h1>
          <ul>
          {brands.map((e) =>(
            <Manu num = {e} /> 
           ))}
          </ul>

    </div>
  );
}
function List({num}){
  return <li>{num}</li>
}
function Manu({num}){
  return <li>{num}</li>
}

export default App;
