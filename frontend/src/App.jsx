import React from "react";
import Home from "./Home";
import Menu from "./components/Menu";
import {BrowserRouter, Routes , Route , Navigate} from "react-router-dom";
export default function App(){
  return(
  
<BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/admin" element={<Menu/>}/>

     </Routes>

</BrowserRouter>


 );
}
