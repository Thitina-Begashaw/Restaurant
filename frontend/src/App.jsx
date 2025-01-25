import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Service from "./components/Service.jsx";
import CheifPic from "./assets/Cheif1.png";
import fork from "./assets/fork.png";
import cart from "./assets/cart.png";
import servicePic from "./assets/service.png";
export default function App(){
  return(
    <>
<Header/>
<Body/>
<Service
  img = {CheifPic}
  title="Master Chefs"
  description="Our Master Chef combines passion and expertise to create dishes that are as exquisite as they are flavorful. Each plate is a carefully crafted masterpiece designed to offer an unforgettable dining experience."
  />

<Service
  img = {fork}
  title="Quality Food"
  description="Indulge in the finest, freshly prepared dishes made with premium ingredients. Our commitment to quality ensures every bite is flavorful and memorable."
  />

<Service
  img = {cart}
  title="Online Order"
  description="OEnjoy the convenience of online ordering for your favorite dishes, delivered fresh to your doorstep. With just a few clicks, savor restaurant-quality meals from the comfort of your home."
  />

<Service
  img = {servicePic}
  title="24/7 Service"
  description="Our 24/7 service ensures delicious meals are always available, no matter the time. Day or night, we’re here to serve you with quality and care."
  />
</>
  );
}
