import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div>
          <h2>Exclusive</h2>
          <div className="inner-footer">
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <input
              className="input-font input-footer"
              placeholder="Enter your Email"
              type="text"
              name="email"
            />
          </div>
        </div>
        <div>
          <h2>Support</h2>
          <div className="inner-footer">
            <p>111. ABC DEF GHI JKL MNO PQR Gujrat</p>
            <p>exclusive@gmail.com</p>
            <p>+92 311 7879393</p>
          </div>
        </div>
        <div>
          <h2>Account</h2>
          <ul className="inner-footer">
            <Link className="link" to="/account">
              <li>My Account</li>
            </Link>
            <Link className="link" to="/signup">
              <li>Login/Register</li>
            </Link>
            <Link className="link" to="/cart">
              <li>Cart</li>
            </Link>
            <Link className="link" to="/">
              <li>Shop</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2>Quick Link</h2>
          <ul className="inner-footer">
            <Link className="link" to="/account">
              <li>Privacy Policy</li>
            </Link>
            <Link className="link" to="/signup">
              <li>Terms of use</li>
            </Link>
            <Link className="link" to="/cart">
              <li>FAQ</li>
            </Link>
            <Link className="link" to="/">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="mini-footer">
        <p
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            paddingBlock: "10px",
          }}
        >
          All Rights Reserved. Created by Muhammad Furqan Abbas
        </p>
      </div>
    </>
  );
};

export default Footer;
