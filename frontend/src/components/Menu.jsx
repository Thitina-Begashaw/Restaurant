import React, { useState, useEffect } from "react"; // Import useState and useEffect
import DoroPic from "../assets/Dorowot.jpg"; // Default image if no image is provided

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]); // State to store menu items

  // Fetch menu data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/menu") // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setMenuItems(data)) // Set the fetched data to state
      .catch((error) => console.error("Error fetching menu:", error));
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="w-screen h-auto mt-64">
      <h1 className="text-orange-500 italic text-5xl font-serif mb-14">Menu</h1>

      {/* Map over the menu items and render them dynamically */}
      {menuItems.map((item) => (
        <div key={item._id} className="h-auto w-1/2 bg-white border border-gray-300 ml-10 mb-10">
          <div className="float-left mr-5">

          {item.image && (
  <img
    className="h-52 w-56 object-cover"
    src={item.image.url}
    alt={item.title}
    onError={(e) => e.target.style.display = "none"} // Hide if broken
  />
)}

            {/* <img
              className="h-52 w-56 object-cover" // Ensure the image fits well
              src={item.image } // Use the item's image or a default image
              alt={item.name}
            /> */}



          </div>
          <div className="m-5">
            <h2 className="text-3xl font-bold font-serif text-orange-500 mb-2">{item.Title}</h2>
            <h3 className="font-extrabold text-2xl mb-1">{item.Price} $</h3>
            <p className="text-gray-500 mb-1">{item.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}