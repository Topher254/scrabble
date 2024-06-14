// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/signup', (req, res) => {
  const { firstName, lastName, username, gender, password } = req.body;

  // Simple validation
  if (!firstName || !lastName || !username || !gender || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Save user to the database (pseudo-code)
  // const newUser = new User({ firstName, lastName, username, gender, password });
  // newUser.save();

  return res.status(201).json({ message: 'User registered successfully' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
