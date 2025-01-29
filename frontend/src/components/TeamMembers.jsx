import React from "react";
import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.jpg";
import chef4 from "../assets/chef4.jpg";
export default function TeamMembers(){

    return (
      <>
      <div className="text-center m-20">
        <h2 className="text-orange-500 font-serif italic text-2xl m-5">Team Members</h2>
        <h1 className="font-bold text-5xl -mb-8">Our Master Chefs</h1>
      </div>
      <div className="flex  justify-center gap-8 p-8">
        {[chef1, chef2, chef3, chef4].map((chef, index) => (
          <div key={index} className="w-64 flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <img src={chef} alt="Chef" className="w-48 h-48 object-cover rounded-full mb-4" />
            <h1 className="text-xl font-bold">Full Name</h1>
            <p className="text-gray-500">Designation</p>
          </div>
        ))}
      </div>
      </>
    );
  }
  