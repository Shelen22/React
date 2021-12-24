import React from 'react';
import("./List.css")

function List(){
    const mobile = ["Android","blackberry","Iphone","Windows Phone"];
    return( mobile.map((e)=> <li>{e}</li>) )
  }

  function Menu(){
    const brands = ["Samsung","BlackBerry","MI","Micromax"];
    return (brands.map((e)=> <li className= "red">{e}</li>) )
  }

  export {List, Menu}