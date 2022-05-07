import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navBarDiv'>
      <nav>
        <div className='navbar_logo'>
          <img src='https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg' />
        </div>
        <div className='navbar_search'>
          <input type='text' placeholder=' Search for products or brands' />
        </div>
        <div className='navbar_cart'>
          <span>Sign In</span>
          <i class='uil uil-bag'></i>
        </div>
      </nav>
      <hr />
      <div className='menu_div'>
        <span>Clearance</span>
        <span>Women</span>
        <span>Men</span>
        <span>Kids</span>
        <span>Shoes</span>
        <span>Activewear</span>
        <span>Bags & Accessories</span>
        <span>Home</span>
        <span>Beauty</span>
        <span>Gifts</span>
        <span>Flash Events</span>
      </div>
    </div>
  );
};

export default Navbar;
