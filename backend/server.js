const express= require("express");
const connectDB = require('./config/db');

const app = express();

connectDB(); // Call the connectDB function to establish the MongoDB connection

app.listen(5000, () => {
  console.log("The backend server started at 5000");
});
