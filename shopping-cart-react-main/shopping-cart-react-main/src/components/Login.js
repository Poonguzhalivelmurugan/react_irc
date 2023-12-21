import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './login.css';
export const Login = () => {
  return (
    <div className="App1">
      <form action="">
        <h3>LOGIN</h3>
        <br></br>
        <div className="input-box">
          <label>Username : </label>
          <br></br>
          <TextField className="inbox" variant="outlined" label="Enter Username" type="email" required />
        </div>
        <br></br>
        <div className="input-box">
          <label>Password : </label>
          <br></br>
          <TextField className="inbox" variant="outlined" label="Password" type="password" required />
          <br></br>
        </div>
        <br></br>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? 
        <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
