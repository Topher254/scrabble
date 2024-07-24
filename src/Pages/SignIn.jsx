import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        username,
        password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', username); // Save username to local storage
      setMessage('Sign-in successful!');
      navigate('/profile');
    } catch (error) {
      setMessage('Error signing in: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-[30em] p-8 bg-white shadow shadow-slate-500 rounded-md'>
        <h1 className='text-xl text-green-600 font-semibold mb-4 items-center flex justify-center'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-2'>
            <label htmlFor="username" className='mr-2'>Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              className='w-full bg-green-300 p-1 outline-none'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='my-2'>
            <label htmlFor="password" className='mr-2'>Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className='w-full bg-green-300 p-1 outline-none'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-center items-center mt-4'>
            <button 
              type="submit"
              className='bg-green-600 text-white py-2 px-4 rounded-md mr-2'
            >
              Submit
            </button>
            <Link to="/signup" className='text-green-600 bg-white border border-green-600 py-2 px-4 rounded-md'>
              Sign Up
            </Link>
          </div>
        </form>
        {message && <div className='mt-4 text-red-600'>{message}</div>}
      </div>
    </div>
  );
};

export default SignIn;
