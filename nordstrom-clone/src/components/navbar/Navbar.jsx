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
            <img
              src='https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg'
              alt=''
            />
          </Link>
        </div>
        <div className='navbar_search'>
          <input type='text' placeholder=' Search for products or brands' />
        </div>
        <div className='navbar_cart'>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <span>{userName.name !== "" ? userName.name : "Sign In"}</span>
          </Link>
          <Link
            to='/cart'
            style={{ textDecoration: "none", color: "rgb(60, 57, 57)" }}
          >
            <i class='uil uil-bag'></i>
          </Link>
        </div>
      </nav>
      <hr />
      <div className='menu_div'>
        <Link to={"/clearance"} style={{ textDecoration: "none" }}>
          <span>Clearance</span>
        </Link>
        <Link to={"/women"} style={{ textDecoration: "none" }}>
          <span>Women</span>
        </Link>
        <Link to={"/men"} style={{ textDecoration: "none" }}>
          <span>Men</span>
        </Link>
        <Link to={"/kid"} style={{ textDecoration: "none" }}>
          <span>Kids</span>
        </Link>
        <Link to={"/shoes"} style={{ textDecoration: "none" }}>
          <span>Shoes</span>
        </Link>
        <span>Activewear</span>
        <span>Bags & Accessories</span>
        <span>Home</span>
        <span>Beauty</span>
        <Link to={"/gift"} style={{ textDecoration: "none" }}>
          <span>Gifts</span>
        </Link>
        <span>Flash Events</span>
      </div>
    </div>
  );
};

export default Navbar;
