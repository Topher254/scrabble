import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          // Redirect to Sign In if no token is present
          navigate('/profile');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          // Unauthorized error, maybe the token is invalid or expired
          setMessage('Session expired. Please log in again.');
          localStorage.removeItem('token');
          navigate('/');
        } else {
          setMessage('Error fetching profile: ' + (error.response?.data || error.message));
        }
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-[30em] p-8 bg-white shadow shadow-slate-500 rounded-md'>
        <h1 className='text-xl text-green-600 font-semibold mb-4 items-center flex justify-center'>Profile</h1>
        {user ? (
          <div>
            <p><strong>First Name:</strong> {user.firstName}</p>
            <p><strong>Last Name:</strong> {user.lastName}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ) : (
          <div>{message}</div>
        )}
      </div>
    </div>
  );
}

export default Profile;
