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
           <List></List>
           
           {/* {mobile.map((e) =>(
            <List num = {e} /> 
           ))} */}
          </ul>
          <h1>Mobile Manufacturing</h1>
          <ul>
          <Menu />
          </ul>
    </div>
  );
}
function List(){
  const mobile = ["Android","blackberry","Iphone","Windows Phone"];
  return( mobile.map((e)=> <li>{e}</li>) )
}
function Menu(){
  const brands = ["Samsung","BlackBerry","MI","Micromax"];
  return ( brands.map((e)=> <li>{e}</li>) )
}


export default App;
