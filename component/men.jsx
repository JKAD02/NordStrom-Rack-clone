import React, { useState, useEffect } from "react";
import axios from "axios";
import "./men.css";
import { MensCategory } from "./MensCategory";

export const Men = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/men").then(({ data }) => {
      // console.log(data);
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <div>
        <MensCategory />
      </div>
      <p className="product-heading">Clothing for Men</p>
      <div className="list-container">
        <ul>
          <li>All Clothing</li>
          <li>Activewear</li>
          <li>Blazers & Sports Coats</li>
          <li>Coats & Jacket</li>
          <li>Dress Shirts</li>
          <li>Golf</li>
          <li>Jeans</li>
          <li>Joggers & Sweatpants</li>
          <li>Pants</li>
          <li>Polo Shirts</li>
        </ul>
      </div>
      <div className="container">
        {product.map((el) => (
          <div className="single-div">
            <img width="200px" src={el.images} alt="" />
            <div className="description">
              <p className="bold-text">{el.brand}</p>
              <p>{el.name}</p>
              <p className="bold-text">{"BestPrice - " + el.price}</p>

              <p>
                OriginalPrice - <strike>{el.origPrice}</strike>
              </p>
              <p>hello</p>

              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div>
              <button className="button-align">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
