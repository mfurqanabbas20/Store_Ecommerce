import React, { useState } from "react";
import { Link } from "react-router-dom";
import side_img from "../assets/side_img.png";
import "./CSS/Login.css";
import axios from 'axios'
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { changeUserStatus } from "../redux/user/userSlice";
import { changeUserDetails } from "../redux/user/detailSlice";
import Home from "./Home";
const Login = () => {
  const userStatus = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogin((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSubmit = () => {
    axios.post('http://www.localhost:5000/login', login)
    .then((res) => {
      console.log(res);
      enqueueSnackbar('Welcome User', {variant: 'success'})
      dispatch(changeUserStatus())
      dispatch(changeUserDetails(login.email))
      navigate('/')
      setLogin(() => {
        return {
          email: '',
          password: ''
        }
      })
    })
    .catch((err) => {
      enqueueSnackbar('Incorrect Credentials')
      console.log(err); 
    })
  }

  return (
    <div className="login-main">
      <img src={side_img} alt="" />
      <div className="login-content">
        <div>
          <h1 className="login-heading">Login to Exclusive</h1>
          <p>Enter your details below</p>
        </div>
        <input onChange={handleChange} className="input-font" type="text" name="email" placeholder="Email Address" />
        <input onChange={handleChange} className="input-font" type="password" name="password" placeholder="Password" />
        <div className="login-btn-section">
          <button onClick={handleSubmit} className="login-btn">Login</button>
          <Link className="link" to="/forgot">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
