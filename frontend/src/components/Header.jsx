import React from "react";
import Rlogo from "../assets/Logo.jpg";
export default function Header(){

  return(
    <div className="bg-[url('./assets/Bg8.jpg')] bg-cover bg-center min-h-screen">
      <div className="flex flex-row gap-12 font-bold h-28"> 
        <img className="absolute left-10 top-0 w-28 h-28  p-2 rounded-full" src= {Rlogo} />
        <h3 className=" cursor-pointer hover:text-orange-400 text-5xl ml-40 mt-6 text-orange-400 font-extrabold">Restaurant</h3>
        <div className="flex flex-row gap-10 text-white items-centers ml-52 mt-10 text-lg ">
        <p className="cursor-pointer hover:text-orange-400 transition duration-300">HOME</p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-300">ABOUT</p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-300">SERVICE</p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-300">MENU</p>
        <p className="cursor-pointer hover:text-orange-400 transition duration-300">CONTACT</p>
        <button className="flex px-6 py-3 mb-7 -mt-3 bg-orange-500 hover:bg-orange-600 text-white transition duration-300  ">BOOK A TABLE</button>
        </div>
      </div>
    </div>
  
  );
}