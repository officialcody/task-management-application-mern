const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://sparshgoelt26:S6D0JMZirsRO0iUM@cluster0.zxscwkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// zEYC03n97QdddeEP
