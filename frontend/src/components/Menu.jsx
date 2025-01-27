import React from "react";
import DoroPic from "../assets/Dorowot.jpg"
export default function Menu(){
  return(
    <div className="w-screen h-96 mt-64">
      <h1 className=" text-orange-500 italic text-5xl font-serif mb-14">menu</h1>
          <div className="h-52 w-1/2 bg-white border border-gray-300 ml-10">
            <div className="float-left mr-5 "><img className="h-52 w-56" src={DoroPic} alt="" /></div>
            <div className="m-5">
             <h2 className="text-3xl font-bold font-serif text-orange-500 mb-2">Doro Wot</h2>
             <h3 className="font-extrabold text-2xl mb-1 ">4.99 $</h3>
             <p className="text-gray-500 mb-1">Tender chicken slow-cooked in a rich, spiced berbere sauce with onions, garlic, and clarified butter. Served with traditional Ethiopian injera, this flavorful dish is perfect for sharing and serves 3 people. A true taste of Ethiopian heritage!</p>
            </div>
         </div>
    </div>
  );
}