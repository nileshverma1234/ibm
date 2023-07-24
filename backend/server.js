const express= require("express");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB(); 

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Working properly");
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("The backend server started at 5000");
});
