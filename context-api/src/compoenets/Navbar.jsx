import React from 'react'
import { useContext , useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    const [ data , setData]  = useState({})
    const { auth,ToggleAuth,token,Register } = useContext(AuthContext);
     
    // const logout = ()=>{
    //     setToken()
    // }
    useEffect(()=>{
        // output()
        ToggleAuth()
    },[token]);

    const handleinput = (e) => {
        e.preventDefault();
        
        const { name, value } = e.target
    
        setData({
          ...data,
          [name]: value,
        })
        // console.log(data)
    
      }
      const handlesubmit = (e) => {
        console.log(data)
      }


    return (
        <div>
           {token ? <button>Logout</button> : <button>Login</button>}
           <h2>Login Here</h2>
           <form handlesubmit = {handlesubmit}>
           <input type="email" placeholder = 'Enter your email address' handleinput = {handleinput} />
           <input type="name" placeholder = 'Enter your Name' handleinput = {handleinput} />
           <input type = "submit" name="submit" />

           </form>

        </div>
    )
}

export default Navbar

    
    

