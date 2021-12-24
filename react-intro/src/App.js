// import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
// import {List, Menu} from "./components/List";

function App() {
  return (
    <div className = "App">
      <Counter num = {1}></Counter>
      {/* <Menu></Menu> */}
    </div>
  );
}

export default App;
