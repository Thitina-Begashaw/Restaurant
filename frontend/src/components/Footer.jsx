import React from "react";
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer(){
  return(
    <>
    <div className=" flex  gap-44 w-full h-96 bg-slate-800 mt-10 p-20">
      <div className="text-white">
        <h1 className="text-orange-500 font-serif italic text-2xl font-bold">Company</h1>
        <ul className="list-none space-y-2 text-xl">
          <li className="before:content-['✔'] before:mr-2 before:text-white">About Us</li>
          <li className="before:content-['✔'] before:mr-2 before:text-white">Contact Us</li>
          <li className="before:content-['✔'] before:mr-2 before:text-white">Reservation</li>
          <li className="before:content-['✔'] before:mr-2 before:text-white">Privacy Policy</li>
          <li className="before:content-['✔'] before:mr-2 before:text-white">Terms and Conditions</li>
        </ul>
      </div>

      <div className="text-white">
        <h1 className="text-orange-500 font-serif italic text-2xl font-bold">Contact</h1>
        <ul className="list-none space-y-2 text-xl">
          <li className="before:content-['✔'] before:mr-2 before:text-white">123 Street, New York, USA</li>
          <li className="before:content-['✔'] before:mr-2 before:text-white">+012 345 67890</li>
          <li className="before:content-['✔'] before:mr-2 before:text-white">info@example.com</li>
          <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-white-500 text-3xl hover:opacity-80" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white-300 text-3xl hover:opacity-80" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-white-500 text-3xl hover:opacity-80" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white-400 text-3xl hover:opacity-80" />
      </a>
    </div>
          
        </ul>
      </div>

      <div className="text-white w-52">
        <h1 className="text-orange-500 font-serif italic text-2xl font-bold">Opening</h1>
        <ul className="list-none space-y-2 text-xl">
          <li className="">Monday-Saturday</li>
          <li className="">09AM - 09PM</li>
          <li className="">Reservation</li>
          <li className="">Sunday</li>
          <li className="">10AM - 08PM</li>
        </ul>
      </div>

      <div className="text-white text-xl">
        <h1 className="text-orange-500 font-serif italic text-2xl font-bold">Newsletter</h1>
        <p>hhhhhhhhhhhhhhhhhhh</p>
      </div>

     


      </div>

      <div className="bg-slate-800 -mt-10 flex-initial h-36 text-white text-xl">
      <hr className="border-t-1 border-gray-100 w-11/12 my-4 ml-20"/>
        <p className="ml-20">&copy; Your Site Name, All Right Reserved. Designed By Thitina Begashaw</p>
      </div>
      </>
  );
}