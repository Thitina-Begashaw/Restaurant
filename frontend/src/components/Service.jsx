import React from "react";

export default function Service({img , title , description}){

  return(
    <div className="bg-white flex flex-row w-52 h-52 ">
            <div className=" w-20 h-20 ">
             <img src={img} alt="" /> 
             </div>
         <div className=" ">
          <h3>{title}</h3>
          <p>{description}</p>
          </div>
      

    </div>
  );

}