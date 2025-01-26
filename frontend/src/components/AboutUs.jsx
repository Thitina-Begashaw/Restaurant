import React from "react";
import Pic1 from "../assets/R1.jpg";
import Pic2 from "../assets/R2.jpg";
import Pic3 from "../assets/R3.jpg";
import Pic4 from "../assets/R4.jpg";
export default function AboutUs(){
  return(
  <div className=" mt-36">
    <div className="float-left mr-10">
    <div className="flex flex-row m-20 -mt-10 gap-5">
    <img className="h-64 w-64" src={Pic1} alt="" />
    <img className="h-48 w-48 mt-16" src={Pic2}  alt="" />
    </div>
    <div className="flex flex-row -mt-16 ml-36 gap-5">
    <img className="h-48 w-48" src={Pic3} alt="" />
    <img className="h-64 w-64" src={Pic4}  alt="" />
    </div>
    </div>
    <div className="mr-20">
    <h1 className="text-orange-500  text-4xl font-extrabold text-center ">Welcome to Restaurant </h1>
  <p className="mt-5 text-xl">we blend passion and expertise to create exceptional dining experiences, offering a diverse menu crafted from the freshest, locally sourced ingredients. </p>
  <p className="mt-5 text-xl">Whether you’re enjoying a cozy meal at home through our easy online ordering and delivery service or dining in, we take pride in delivering flavorful, expertly prepared dishes that delight your taste buds. With a commitment to quality and service, we strive to provide more than just a meal — we offer a memorable experience for every guest.</p>
  </div>
  </div>
  );
}