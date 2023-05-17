import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './Header.css'
const Header = () => {
  return (
    <div className="navbar">
        <div className="navbar__left">
            <p>Start Shoping</p>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Shop</a></li>
            </ul>
        </div>
        <div className="navbar__right">
            <button><BsFillCartFill/>             Cart</button>
            <Link to="/new">
          <button> Add Products</button>
        </Link>
        </div>
    </div>
    )
}

export default Header