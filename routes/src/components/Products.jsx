import React from 'react';

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Products = () => {
    const [product , setProduct] = useState([]);
    
    useEffect(() =>{
        getprod()      
    },[])
    
    const getprod = () =>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) =>{
            setProduct(res)
            // console.log("res" ,res)
        })
    }
    // console.log(product)
    return (
        <div>
            <h2>Products </h2>
            {product.map((e) =>
             <Linked to ={`/products/${e.id}`} key={e.id}>
                 <img src={e.image} alt ={e.title} />
                 <h3>{e.title}</h3></Linked>
             )}
        </div>
    )
}
const Linked = styled(Link)`
text-decoration: none;
color: Black;
img{
    width:200px;
}`

export default Products
