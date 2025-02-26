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

  const handleHomeClick = () => {
    // Animate scrolling to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })}

  return (
    <div className="bg-[url('./assets/Bg8.jpg')] bg-cover bg-center h-[150vh]">
      <div
        className={`flex flex-row gap-12 font-bold  fixed z-10 ${
          isScrolled ? "bg-slate-800  w-lvw h-20 transition-colors duration-300" : "bg-transparent h-28"
        }`}
      >
        <img
         className={`absolute left-10 top-0  p-2 rounded-full ${isScrolled ? "h-20 w-20 " : "h-24 w-24"}`}

          src={Rlogo}
          alt="Restaurant Logo"
        />
        <h3 className={`  ml-40  text-orange-500 font-extrabold  ${isScrolled ? "mt-3 h-20 text-4xl" : "mt-6 h-auto text-5xl"}`}>
          Restaurant
        </h3> 

        

        <div className="hidden md:flex gap-5 lg:gap-10 items-center text-white text-sm md:text-base lg:text-lg">
          <p className="cursor-pointer hover:text-orange-400 transition duration-300" onClick={handleHomeClick}>HOME</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">ABOUT</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">SERVICE</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">MENU</p>
          <p className="cursor-pointer hover:text-orange-400 transition duration-300">CONTACT</p>
          <button className="flex px-5 py-3  bg-orange-500 hover:bg-orange-600 text-white transition duration-300">
            BOOK A TABLE
          </button>
        </div>
        <div className="md:hidden text-white cursor-pointer text-2xl">☰</div>
      </div>
    </div>
  );
}