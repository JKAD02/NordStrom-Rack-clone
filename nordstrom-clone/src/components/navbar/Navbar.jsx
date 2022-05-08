import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import SignNameContext from "../../context/SignNameContext";

const Navbar = () => {
  const { userName } = useContext(SignNameContext);
  console.log(userName.name);
  return (
    <div className='navBarDiv'>
      <nav>
        <div className='navbar_logo'>
          <Link to={"/"}>
            <img src='https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg' />
          </Link>
        </div>
        <div className='navbar_search'>
          <input type='text' placeholder=' Search for products or brands' />
        </div>
        <div className='navbar_cart'>
          {userName.name !== "" ? (
            userName.name
          ) : (
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
            >
              <span>Sign In</span>
            </Link>
          )}
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
