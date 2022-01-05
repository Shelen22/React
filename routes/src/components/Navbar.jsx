
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navbar  = () =>{
    return (
        <Div>
            <Linked to="/" >Home</Linked>
            <Linked to= "/products" style = {{margin:"2%"}} >Products</Linked>

        </Div>
    )
}
const Div = styled.div`
text-align: center;
`
const Linked = styled(Link)`
text-decoration: none;
color: Black;`

export default Navbar