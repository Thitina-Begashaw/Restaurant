import React, { useState } from "react"; // Import useState
import AdminLogo from "../assets/adminp2.jpg"; // Ensure the path is correct

export default function AdminPages() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    foodName: "",
    price: "",
    description: "",
    image: null,
  });

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFormData({ ...formData, image: file });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("foodName", formData.foodName);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:5000/api/menu", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ foodName: "", price: "", description: "", image: null });
        setImage(null);
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-300">
        <img className="h-40 w-screen -mt-20" src={AdminLogo} alt="Admin Logo" />

        <form onSubmit={handleSubmit} className="h-screen w-full ml-72 mt-20 text-orange-500">
          <h1 className="text-4xl font-bold font-serif mb-10">
            Food Name: &nbsp;
            <input
              className="w-96 h-20 border-2 border-orange-500 text-xl text-black font-light"
              type="text"
              name="foodName" // Add name attribute
              value={formData.foodName}
            onChange={(e) => setFormData({ ...formData, foodName: e.target.value })}
            />
          </h1>

          <h1 className="text-4xl font-bold font-serif mb-10">
            Price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              className="w-96 h-20 border-2 border-orange-500 text-xl text-black font-light"
              type="text"
              name="price" // Add name attribute
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </h1>

          <h1 className="text-4xl font-bold font-serif mb-10">
            Description: &nbsp;
            <textarea
              className="w-96 h-20 border-2 border-orange-500 text-xl text-black font-light"
              name="description" // Add name attribute
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </h1>

          <h1 className="text-4xl font-bold font-serif mb-10">Image:</h1> {/* Fixed mb-101 to mb-10 */}
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />

          {image && <img src={image} alt="Preview" className="h-40 w-40 mt-4 border-2 border-gray-500" />}

          <br />

          <button type="submit" className="mt-6 px-6 py-3 bg-orange-500 text-white text-2xl font-bold rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}