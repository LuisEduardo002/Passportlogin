const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")

// Import routes
const userRoutes = require("./routes/user_routes");
const adrresRoutes=require("./routes/ruta_adress")
const superheroRoutes=require("./routes/superhero_routes")


const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Midleware
app.use(cors())
// http://localhost:3000/
app.listen(PORT, () => console.log("Server is running in port", PORT));

// http://localhost:3000/api/v1/users/new-user
app.post("/api/v1/users", userRoutes);
app.use("/api/v1/adress",adrresRoutes)
app.use("/api/v1/superheros", superheroRoutes)

// Connect to MongoDB
const getConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_CONNECTION);
    if (conn) {
      console.log(`MongoDB Connected on ${conn.connection.host}`);
    } else {
      console.log("Failed to connect DB");
    }
  } catch (error) {
    console.log(`Failed with error: ${error.message}`);
  }
};

getConnection();