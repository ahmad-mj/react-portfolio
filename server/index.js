const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const emailRoute = require("./routes/contact");

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: false
}));

//load environment variables
dotenv.config();

// middelware
app.use(express.json());
// basic route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/contact", emailRoute);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
