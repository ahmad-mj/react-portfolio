const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

//load environment variables
dotenv.config()

// middelware
app.use();
app.use(express.json());

// basic route
app.get('/', (req, res) => {
    res.send('Backend is running')
});

// Start server
const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));