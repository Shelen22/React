import React from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [data, setData] = useState({});
  const { auth, ToggleAuth } = useContext(AuthContext);
  const [token, setToken] = useState();
  const [show, setShow] = useState(false);

  const handleinput = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
    // console.log(data)
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        setToken(res.token);
        //  console.log(res)
        ToggleAuth();
        // setData()
      });
  };
  const change = () => {
     if(token){
       setShow(false)
     }
     else{
       setShow(true)
     }
  };
  

  return (
    <div>
      <button onClick={change}>{auth}</button>
      <h2>Login Here</h2>
      {show === true ? (
        <form onSubmit={handlesubmit}>
          <input
            type="text" name = "email" 
            placeholder="Enter your email or username"
            onChange={handleinput}
          />
          <input
            type="password" name = "password" 
            placeholder="Enter your Password"
            onChange={handleinput}
          />
          <input type="submit" name="submit" />
        </form>
      ) : (
        null
      )}
      {auth === "Logout" ? <div>Your login Token is {token}</div> : null}
    </div>
  );
}

export default Navbar;
