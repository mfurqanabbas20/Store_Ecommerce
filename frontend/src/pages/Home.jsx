import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Home = () => {

  const userDetails = useSelector((state) => state.detail.value)
  const userStatus = useSelector((state) => state.user.value)

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const getUser = () => {
    axios
      .get("http://www.localhost:5000/login")
      .then((res) => {
        res.data.user.map((item) => {
          if(item.email == userDetails){
            setUser({
              name: item.name,
              email: item.email,
              password: item.password
            })
          }
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  userStatus && useEffect(() => {
    getUser()
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {user.name}
      {user.email}
      {user.password}
    </div>
  );
};

export default Home;
