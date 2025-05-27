import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import user_img from '../../assets/user.png'

import "./Header.css";
const Header = () => {
  const userStatus = useSelector((state) => state.user.value);
  const [search, setSearch] = useState("");
  function handleChange(event) {
    setSearch(() => event.target.value);
  }
  function handleSearch(event) {
    console.log(search);
    setSearch("");
  }

  return (
    <div className="main-header">
      <h2>Exclusive</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!userStatus && (
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        )}
      </ul>
      <span>
        <input
          onChange={handleChange}
          type="text"
          value={search}
          name="search"
          id="search"
          placeholder="What are looking for?"
        />
        <i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>
      </span>
      <div className="header-icons">
        <Link to="/wishlist">
          <i className="fa-regular fa-heart"></i>
        </Link>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="drop-main">
          {userStatus && (
            <img className="user-img" src={user_img} alt="User Image" />
          )}
          <div className="drop-down">
            <ul>
              <li>
                <i className="fa-regular fa-user"></i>
                <Link to="/account">Manage My Account</Link>
              </li>
              <li>
                <i className="fa-solid fa-address-book"></i>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
