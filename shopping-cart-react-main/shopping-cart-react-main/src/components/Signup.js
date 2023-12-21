import React from 'react';
import './signup.css';
import {Link} from 'react-router-dom';
import { TextField } from '@mui/material';
export const Signup = () =>{
  return (
    <div className="App2">
      <form action="">
        <h3>SIGN UP</h3>
        <div className="input-box">
            <label>UserName : </label>
            <TextField className="boxx" variant="outlined" label="Enter Username" type="text" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Date of Birth :</label>
            <TextField className="boxx" variant="outlined" type="date" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Mobile Number :</label>
            <TextField className="boxx" variant="outlined" label="Enter Mobile Number" type="number" required/>
        </div>
        <br></br>   
        <div className="input-box">
            <label>Email address :</label>
            <TextField className="boxx" variant="outlined" label="Enter Email address" type="email" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Password :</label>
            <TextField className="boxx" variant="outlined" label="Enter Password" type="password" required/>
        </div>
        <button type="submit">SIGNUP</button>
      </form>
      <p>
        <h3>Already have an account? 
          <Link to="/"> Login</Link></h3>
      </p>
    </div>
  );
}

export default Signup;