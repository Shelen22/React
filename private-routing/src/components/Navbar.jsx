import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <NavBar>
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="settings">Setting</Link>
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height:50px;
  font-size: 30px;
  a {
    text-decoration: none;
    color: black;
  }
`;

export default Navbar;