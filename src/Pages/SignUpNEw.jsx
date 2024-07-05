import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Register</h1>
      {!Valid && (
        <span className="text-red-500">
          {Errors.userName && <div>{Errors.userName}</div>}
          {Errors.password && <div>{Errors.password}</div>}
          {Errors.C_password && <div>{Errors.C_password}</div>}
          {Errors.email && <div>{Errors.email}</div>}
        </span>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="C_password"
            value={formData.C_password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-green-500">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUpNEw;
