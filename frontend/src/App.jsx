
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";
import AdminPage from "./components/AdminPage.jsx";
import {BrowserRouter, Routes , Route , Navigate} from "react-router-dom";
export default function App(){
  const [data, setData] = useState(null); // State to store backend response

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menu") // Ensure backend is running on port 5000
      .then((response) => {
        console.log("Backend Response:", response.data); // Debugging
        setData(response.data); // Store backend response in state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return(
  
<BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/admin" element={<AdminPage/>}/>

     </Routes>

</BrowserRouter>


 );
}
