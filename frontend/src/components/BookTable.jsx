import reservationPic from "../assets/Reserv3.jpg";
export default function BookTable(){
  return(
    <div className="flex ">
       <div className="float-left"> <img className="w-full h-full object-cover" src={reservationPic} alt="" />
       </div>
       <div className="w-full  bg-slate-800 flex flex-col justify-start items-start p-8 ">
      <h1 className=" text-orange-500 font-serif italic text-2xl m-5">Reservation</h1>
      <h1 className=" text-white ml-5 text-5xl font-bold font-serif mb-10">Book A Table Online</h1>
             
                <form className=" w-full flex flex-col gap-4 text-xl" action="">
                  <div className="inline-flex gap-5 ">
                  <input className="w-1/2 h-16 " type="text" 
                  placeholder="Your Name"
                 />
              
                  <input className="w-1/2" type="text" 
                  placeholder="Your Email"/>
                 </div>
                 <div className="inline-flex gap-5 ">
                  <input className="w-1/2 h-16" type="text" 
                  placeholder="Date & Time"/>      
               
                <input className="w-1/2 h-16" type="number" 
                  placeholder="Number of People"/>
                 </div>
                  <textarea className="w-full h-32 " type="text" 
                  placeholder ="Special Request" />
                  

                  <button className="w-full h-16 bg-orange-500 text-white">
                    BOOK NOW
                  </button>
                  </form>
              </div>
         </div>
 
  );
}