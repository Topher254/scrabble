import React, { useState } from 'react';
import axios from 'axios';

const AddPlayer = () => {
  const [player, setPlayer] = useState({
    firstName: '',
    lastName: '',
    password: '',
    userName: '',
    gender: ''
  });

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1235/players/add', player);
      alert('Player added successfully');
      setPlayer({
        firstName: '',
        lastName: '',
        password: '',
        userName: '',
        gender: ''
      });
    } catch (error) {
      console.error('Error adding player:', error);
      alert('Error adding player');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Player</h2>
      <input
        type="text"
        name="firstName"
        value={player.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={player.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <input
        type="password"
        name="password"
        value={player.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="userName"
        value={player.userName}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="text"
        name="gender"
        value={player.gender}
        onChange={handleChange}
        placeholder="Gender"
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default AddPlayer;
