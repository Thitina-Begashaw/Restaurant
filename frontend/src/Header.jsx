import React from "react";
import forklogo from "./assets/fork3.jpg";
export default function Header(){

  return(
    <div className="">
      <div> 
        <img src= {forklogo} />
        <h3 className="text-3xl font-bold underline">Restaurant</h3>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>SERVICE</p>
        <p>MENU</p>
        <p>CONTACT</p>
        <button>BOOK A TABLE</button>
      </div>

    </div>
  );
}