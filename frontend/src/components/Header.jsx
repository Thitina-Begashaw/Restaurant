import React, { useState, useEffect } from "react";
import Rlogo from "../assets/Logo.jpg";

export default function Header() {
  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) { // You can adjust this value
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[url('./assets/Bg8.jpg')] bg-cover bg-center h-[150vh]">
      <div
        className={`flex flex-row gap-12 font-bold h-28 fixed z-10 ${
          isScrolled ? "bg-black w-lvw h-24 transition-colors duration-300" : "bg-transparent"
        }`}
      >
        <img
          className="absolute left-10 top-0 w-24 h-24 p-2 rounded-full"
          src={Rlogo}
          alt="Restaurant Logo"
        />
        <h3 className="cursor-pointer hover:text-orange-400 text-5xl ml-40 mt-6 text-orange-400 font-extrabold">
          Restaurant
        </h3>
        <div className="flex flex-row gap-10 text-white items-center ml-52 text-lg">
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">HOME</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">ABOUT</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">SERVICE</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">MENU</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">CONTACT</p>
          <button className="flex px-6 py-3  bg-orange-500 hover:bg-orange-600 text-white transition duration-300">
            BOOK A TABLE
          </button>
        </div>
      </div>
    </div>
  );
}
