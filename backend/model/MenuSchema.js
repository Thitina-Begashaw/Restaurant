import mongoose, { model } from "mongoose";

const menuSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false
  }
} , {timestamps: true});

const menu = model.mongoose('menu' , menuSchema)

export default menu;
