import React, { useState } from 'react';
import imej from '../assets/image.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submittedPlayer, setSubmittedPlayer] = useState(null);

  const generateAndCopyPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedPassword = '';
    for (let i = 0; i < 10; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
    navigator.clipboard.writeText(generatedPassword);
    alert('Password copied to clipboard!');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters and include at least one number.');
      return;
    }

    const userDetails = {
      firstName,
      lastName,
      userName,// Match the backend field
      gender,
      password
    };

    try {
      const response = await axios.post('http://localhost:1235/players/add', userDetails);
      
      if (response.data && response.data.id) {
        const playerInfo = await axios.get(`http://localhost:1235/players/${response.data.id}`);
        setSubmittedPlayer(playerInfo.data);
        setMessage('Sign-up successful!');
      } else {
        setMessage('Error: Player ID not found in response');
      }

      setFirstName('');
      setLastName('');
      setUsername('');
      setGender('');
      setPassword('');
      setRepeatPassword('');
      setPasswordError('');
    } catch (error) {
      console.error('Error adding player:', error);
      setMessage('Error adding player');
    }
  };

  const handleKeyDown = (e, nextFieldId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextField = document.getElementById(nextFieldId);
      if (nextField) {
        nextField.focus();
      }
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-[45em] p-8 bg-white shadow shadow-slate-500 rounded-md'>
        <h1 className='text-xl text-green-600 font-semibold mb-4 items-center flex justify-center'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex'>
          <div className='w-1/2'>
            <img src={imej} alt="Profile" className='min-w-full h-auto '/>
          </div>
          <div className='ml-4 flex flex-col justify-between'>
            <div className='my-2'>
              <label htmlFor="first-name" className='mr-2'>First Name</label>
              <input 
                type="text" 
                id="first-name" 
                name="first-name" 
                className='w-full bg-green-300 p-1 outline-none'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'last-name')}
                required
              />
            </div>
            <div className='my-2'>
              <label htmlFor="last-name" className='mr-2'>Last Name</label>
              <input 
                type="text" 
                id="last-name" 
                name="last-name" 
                className='w-full bg-green-300 p-1 outline-none'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'username')}
                required
              />
            </div>
            <div className='my-2'>
              <label htmlFor="username" className='mr-2'>Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                className='w-full bg-green-300 p-1 outline-none'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'gender')}
                required
              />
            </div>
            <div className='my-2'>
              <label htmlFor="gender" className='mr-2'>Gender</label>
              <select 
                id="gender" 
                name="gender" 
                className='w-full bg-green-300 p-1 outline-none'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'password')}
                required
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='my-2'>
              <label htmlFor="password" className='mr-2'>Password</label>
              <div className="flex items-center">
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className='w-full bg-green-300 p-1 outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'repeat-password')}
                  minLength="6"
                  required
                />
                <button type="button" onClick={generateAndCopyPassword} className="ml-2 bg-gray-400 px-3 py-1 rounded-md text-white">Generate & Copy</button>
              </div>
              {passwordError && <div className='text-red-600'>{passwordError}</div>}
            </div>
            <div className='my-2'>
              <label htmlFor="repeat-password" className='mr-2'>Repeat Password</label>
              <input 
                type="password" 
                id="repeat-password" 
                name="repeat-password" 
                className='w-full outline-none bg-green-300 p-1'
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'submit-button')}
                required
              />
            </div>
          </div>
        </form>
        <div className='flex justify-center items-center mt-4'>
          <button 
            type="submit"
            id="submit-button"
            onClick={handleSubmit}
            className='bg-green-600 text-white py-2 px-4 rounded-md mr-2'
          >
          <Link to=""> Submit</Link>
          </button>
          <button 
            type="submit"
            id="submit-button"
            onClick={handleSubmit}
            className='text-green-600 bg-white border border-green-600 py-2 px-4 rounded-md mr-2'
          >
            <Link to="/signin"> Log In</Link>
          </button>
        </div>
        
        {message && <div className='mt-4 text-red-600'>{message}</div>}
      </div>

      {submittedPlayer && (
        <div className='mt-8'>
          <h3 className='text-lg font-semibold'>Player Information</h3>
          <p>First Name: {submittedPlayer.firstName}</p>
          <p>Last Name: {submittedPlayer.lastName}</p>
          <p>Username: {submittedPlayer.userName}</p>
          <p>Gender: {submittedPlayer.gender}</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
