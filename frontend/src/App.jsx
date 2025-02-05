import React from "react";
import Home from "./Home";
import AdminPage from "./components/AdminPage.jsx";
import {BrowserRouter, Routes , Route , Navigate} from "react-router-dom";
export default function App(){
  return(
  
<BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/admin" element={<AdminPage/>}/>

     </Routes>

</BrowserRouter>


 );
}
