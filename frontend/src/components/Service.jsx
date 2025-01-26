import React from "react";

export default function Service({img , title , description}){

  return(
    <div className="inline-flex ">
    <div className="bg-white  items-center w-72 h-72 m-5 p-10">
            <div className="  w-[60px] h-[60px] ml-0 ">
             <img src={img} alt="" /> 
             </div>
         <div className="ml-0 mt-5">
          <h3 className="font-heebo font-bold text-xl">{title}</h3>
          <p className="text-lg text-emerald-950 text-justify mt-3 ">{description}</p>
          </div>
          </div>

    </div>
  );

}