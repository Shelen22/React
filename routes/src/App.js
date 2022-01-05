import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import {Home} from "./components/Home";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";


function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
         <Route path = "/" element = {<Home />} ></Route>
         <Route path = "/products" element = {<Products />} ></Route>
         <Route path = "/products/:id" element = {<ProductsDetails />} ></Route>
         <Route path = "*" element = {<img src="404found.jpg" alt ="404 Error" style = {{width:"100%", height:"500px"}} />} ></Route>
       </Routes>
    </div>
  );
}

export default App;
