import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
    const { auth } = useContext(AuthContext)
    return (
        <div>
           value of :{ auth }
        </div>
    )
}

export default Navbar
