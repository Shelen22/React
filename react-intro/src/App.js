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
             <li>Android</li>
             <li>blackberry</li>
             <li>Iphone</li>
             <li>Windows Phone</li>
          </ul>
          <h1>Mobile Manufacturing</h1>
          <ul>
            <li className="square">Samsung</li>
            <li className="square">HTC</li>
            <li>Micromax</li>
            <li className = "circle">Apple</li>
          </ul>

    </div>
  );
}

export default App;
