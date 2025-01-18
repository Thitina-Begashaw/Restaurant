import mongoose, { model } from "mongoose";

const menuSchema = new mongoose.Schema(
  {
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
    image: {
     
      url: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const menu = mongoose.model("menu", menuSchema);

export default menu;
