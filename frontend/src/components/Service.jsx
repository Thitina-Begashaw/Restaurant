import React from "react";

export default function Service({img , title , description}){

  return(
    <div className="inline-flex ">
    <div className="bg-white  items-center w-72 h-72 m-5 p-10">
            <div className="  w-[60px] h-[60px] ml-10 ">
             <img src={img} alt="" /> 
             </div>
         <div className="ml-5 mt-2">
          <h3 className="font-heebo font-bold text-xl">{title}</h3>
          <p className="text-lg text-balance text-emerald-900 ">{description}</p>
          </div>
          </div>

    </div>
  );

}