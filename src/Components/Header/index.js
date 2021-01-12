import React from 'react'
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
    <nav className=" headerMenu">
    <a href="#">Home</a>
    <a href="#">Bollywood</a>
    <a href="#">Technology</a>
    <a href="#">Hollywood</a>
    <a href="#">Fitness</a>
    <a href="#">Food</a>
    </nav></header>
   )

 }

export default Header