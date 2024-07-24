import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(response.data);
      } catch (error) {
        setMessage('Error fetching profile: ' + (error.response?.data || error.message));
      }
    };

    fetchUser();
  }, []);

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
