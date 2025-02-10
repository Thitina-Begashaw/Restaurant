import React, { useState } from "react";
import AdminLogo from "../assets/adminp2.jpg";

export default function AdminPages() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    foodName: "",
    price: "",
    description: "",
    image: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFormData({ ...formData, image: file });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.foodName || !formData.price || !formData.description || !formData.image) {
      alert("Please fill out all fields and upload an image.");
      return;
    }
  
    const data = new FormData();
    data.append("Title", formData.foodName);
    data.append("Price", formData.price);
    data.append("Description", formData.description);
    data.append("image", formData.image);
  
    console.log("Form Data:", {
      Title: formData.foodName,
      Price: formData.price,
      Description: formData.description,
      image: formData.image,
    });
  
    try {
      const response = await fetch("http://localhost:5000/api/menu", {
        method: "POST",
        body: data,
      });
  
      console.log("Response Status:", response.status);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response Data:", responseData);
        alert("Form submitted successfully!");
        setFormData({ foodName: "", price: "", description: "", image: null });
        setImage(null);
      } else {
        const errorData = await response.json();
        console.error("Error Data:", errorData);
        alert(`Failed to submit form: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="bg-gray-300">
      <img className="h-40 w-screen -mt-20" src={AdminLogo} alt="Admin Logo" />
      <form onSubmit={handleSubmit} className="h-screen w-full ml-72 mt-20 text-orange-500">
        <h1 className="text-4xl font-bold font-serif mb-10">
          Food Name: &nbsp;
          <input
            className="w-96 h-20 border-2 border-orange-500 text-xl text-black font-light"
            type="text"
            name="foodName"
            value={formData.foodName}
            onChange={(e) => setFormData({ ...formData, foodName: e.target.value })}
          />
        </h1>

        <h1 className="text-4xl font-bold font-serif mb-10">
          Price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="w-96 h-20 border-2 border-orange-500 text-xl text-black font-light"
            type="text"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </h1>

        <h1 className="text-4xl font-bold font-serif mb-10">
          Description: &nbsp;
          <textarea
            className="w-96 h-20 border-2 border-orange-500 text-xl text-black font-light"
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </h1>

        <h1 className="text-4xl font-bold font-serif mb-10">Image:</h1>
        <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

        {image && <img src={image} alt="Preview" className="h-40 w-40 mt-4 border-2 border-gray-500" />}

        <br />

        <button type="submit" className="mt-6 px-6 py-3 bg-orange-500 text-white text-2xl font-bold rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}