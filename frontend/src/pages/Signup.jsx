import {useState} from 'react'
import side_img from '../assets/side_img.png'
import {Link} from 'react-router-dom'
import './CSS/Signup.css'
import {enqueueSnackbar} from 'notistack'
import axios from 'axios'
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitData = () => {
    console.log(user);
    axios.post('http://www.localhost:5000/signup', user)
    .then(() => {
      enqueueSnackbar('User Created', {variant: 'success'})
    })
    .catch((err) => {
      console.log(err);
      enqueueSnackbar('User Not Created', {variant: 'error'})
    })
    setUser(() => {
      return {
        name: "",
        email: "",
        password: ""
      }
    })
  }
  return (
    <div className="signup-main">
    <img src={side_img} alt="Side Image for Signup" />
    <div className="signup-content">
      <div>
        <h1 className="signup-heading">Create an account</h1>
        <p>Enter your details below</p>
      </div>
      <input value={user.name} onChange={handleChange} className="input-font" type="text" name="name" placeholder="Name" />
      <input value={user.email} onChange={handleChange} className="input-font" type="text" name="email" placeholder="Email Address" />
      <input value={user.password} onChange={handleChange} className="input-font" type="password" name="password" placeholder="Password" />
      <div className="signup-btn-section">
        <button onClick={submitData} className="signup-btn">Create Account</button>
        <button className="signup-btn google-btn">Signup with Google</button>
        <Link className='link' to='/login'>Already have an account? Login</Link>
      </div>
    </div>
  </div>
  )
}

export default Signup