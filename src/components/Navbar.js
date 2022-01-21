import React from 'react'
import { Link } from 'react-router-dom';


import "../Styles/Navbar.css"

function Navbar() {
  return (

<nav class="navbar navbar-expand-lg navbar-light  bg-dark ">
  <a class="navbar-brand text-white" href="#">Store</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active "> 
        <Link className="nav-link  text-white" to="/" >Home </Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/products">Products</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/about">About</Link>
      </li>
      <li class="nav-item">
      <Link className="nav-link text-white" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
   
  )
}

export default Navbar
