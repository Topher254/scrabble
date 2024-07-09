import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignUpNEw = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    C_password: '',
  });

  const [Errors, setErrors] = useState({});
  const [Valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    if (formData.userName === "") {
      isValid = false;
      validationErrors.userName = "UserName Required";
    }
    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "Email Required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Email invalid";
    }
    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "PASSWORD Required";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Password length must be at least 6 characters";
    }
    if (formData.C_password !== formData.password) {
      isValid = false;
      validationErrors.C_password = "Passwords do not match";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:1235/players', formData)
        .then(result => 
            alert("Registered Successfully"),
            navigate('/signin')
        )
        .catch(err => console.log(err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='w-full h-screen flex items-center  justify-center'>  
    <div className='px-[3em] rounded-md shadow-md shadow-slate-200 py-[3em] w-[30em]'>
      <h1 className='flex justify-center text-2xl text-green-600 font-semibold py-4'>Register</h1>
      {!Valid && (
        <span className="text-red-500">
          {Errors.userName && <div>{Errors.userName}</div>}
          {Errors.password && <div>{Errors.password}</div>}
          {Errors.C_password && <div>{Errors.C_password}</div>}
          {Errors.email && <div>{Errors.email}</div>}
        </span>
      )}
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col '>
          <label className='text-green-800 font-semibold'>UserName</label>
          <input className='outline-none border border-green-500 my-1 py-2 rounded-md'
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder='UserName'
          />
        </div>
        <div className='flex flex-col  '>
          <label className='text-green-800 font-semibold'>Email</label>
          <input className='outline-none border border-green-500 my-1 py-2 rounded-md'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Email'
          />
        </div>
        <div className='flex flex-col '>
          <label className='text-green-800 font-semibold'>Password</label>
          <input className='outline-none border border-green-500 my-1 py-2 rounded-md'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
          />
        </div>
        <div className='flex flex-col '>
          <label className='text-green-800 font-semibold'>Confirm Password</label>
          <input className='outline-none border border-green-500 my-1 py-2 rounded-md'
            type="password"
            name="C_password"
            value={formData.C_password}
            onChange={handleChange}
            placeholder='Confirm Password'
          />
        </div>
        <button type="submit" className="bg-green-500 px-2 py-2 rounded-md flex justify-center w-full mt-6
        text-white">
          Register
        </button>
        <p className='flex justify-center my-2'>Or</p>
        <button className="bg-white px-2 py-2 rounded-md flex justify-center w-full 
        text-green-500 border-green-500 border">
          <Link to="/signin"> Login</Link> 
        </button>
      </form>
      </div> 
    </div>
  );
};

export default SignUpNEw;
