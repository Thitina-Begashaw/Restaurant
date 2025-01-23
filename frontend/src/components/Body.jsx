import React from "react";
import BodyPic from "../assets/bodyf2.jpg"
export default function Body(){
  return(
    <div className="flex items-start px-10 py-10">
    <div className="absolute left-32 top-56 text-white">
      <h1 className="text-7xl font-bold m-5">Enjoy our <br/>
      Delicious Meal</h1>
      <p className="text-xl mb-5 ml-7">Savor the rich flavors of our expertly crafted dishes, made with the freshest<br/> ingredients and a passion for perfection. From every bite to every sip, <br/>our menu offers something truly special to satisfy your cravings.</p>
      <button className="px-7 py-3 mb-20 ml-36 bg-orange-500 hover:bg-orange-600 text-white transition duration-300  ">BOOK A TABLE</button>
      </div>
      <div className="absolute right-32 top-56">
      <img className="rounded-full w-96 h-96  object-cover" src= {BodyPic} alt="" />
      </div>
    </div>
  );
}