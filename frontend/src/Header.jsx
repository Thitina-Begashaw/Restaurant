import React from "react";
import Rlogo from "./assets/Logo.jpg";
export default function Header(){

  return(
    <div className="bg-[url('./assets/Back3.jpg')] bg-cover bg-center min-h-screen">
      <div className="flex flex-row gap-12 bg-black h-28"> 
        <img className="absolute left-10 top-0 w-28 h-28  p-2 rounded-full" src= {Rlogo} />
        <h3 className=" text-white text-5xl ml-36 mt-6">Restaurant</h3>
        <div className="flex flex-row gap-12 text-white items-centers ml-72 mt-10">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>SERVICE</p>
        <p>MENU</p>
        <p>CONTACT</p>
        <button className="flex ">BOOK A TABLE</button>
        </div>
      </div>
    </div>
  
  );
}