const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const emailRoute = require("./routes/email");

console.log(typeof emailRoute); // should be 'function'

//load environment variables
dotenv.config();

// middelware
app.use(express.json());
app.use(cors());
// basic route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/email", emailRoute);

// Start server
const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
