import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config()
const app = express()

mongoose.connect()
  .then(
    app.listen(process.env.PORT , ()=>{
      console.log("The Database is connected successfully and server is run on the port " , process.env.PORT)
    })
  )
  .catch(err => console.error("Failed to connect to MongoDB", err));
