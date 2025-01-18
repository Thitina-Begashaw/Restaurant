import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import menuRoutes from "./routes/MenuRoutes.js"
dotenv.config()
const app = express()
// app.use(cors());

app.use(express.json());

app.use("/api/menu", menuRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT , ()=>{
      console.log("The Database is connected successfully and server is run on the port " , process.env.PORT)
    })
  )
  .catch(err => console.error("Failed to connect to MongoDB", err));
