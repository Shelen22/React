import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from "styled-components";


const ProductsDetails = () => {
    const [one , setOne] = useState({})
    const {id} = useParams();

    useEffect(() =>{
     getproducts()
    })
    
    const getproducts = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((res) =>{
            setOne(res)
            // console.log('res:', res)
        })
    }
    
    return (
        <Div>
            <h2>productdetails</h2>
            <img src= {one.image} alt={one.title} />
             <Details>
            <p>Product Name :{one.title}</p>
            <h5>Price :{one.price}</h5>
            <p>Description :- {one.description}</p>
             </Details>
        </Div>
    )
}

const Div = styled.div`
width: 100%;
img{
    margin-left: 50px;
     width:200px;
     heigth: 150px;
 }
`
const Details = styled.div`
 width: 300px;
 text-align: center;
`


export default ProductsDetails
