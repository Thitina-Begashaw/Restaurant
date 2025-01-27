import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Service from "./components/Service.jsx";
import CheifPic from "./assets/Cheif1.png";
import fork from "./assets/fork.png";
import cart from "./assets/cart.png";
import servicePic from "./assets/service.png";
import AboutUs from "./components/AboutUs.jsx";
import BookTable from "./components/BookTable.jsx";
import Menu from "./components/Menu.jsx";
export default function App(){
  return(
    <>
<Header/>
<Body/>
<Service
  img = {CheifPic}
  title="Master Chefs"
  description="Our Master Chef blends passion and expertise to craft exquisite, flavorful dishes."
  />

<Service
  img = {fork}
  title="Quality Food"
  description="Indulge in the finest, freshly prepared dishes made with premium ingredients."
  />

<Service
  img = {cart}
  title="Online Order"
  description=" Enjoy easy online ordering and fresh delivery to your doorstep."
  />

<Service
  img = {servicePic}
  title="24/7 Service"
  description="Our 24/7 service ensures delicious meals are always available, no matter the time. "
  />

  <AboutUs/>
<Menu/>


</>
  );
}
