import AdminLogo from "../assets/adminp2.jpg"
export default function AdminPages (){
  return(
    <>
    <div className=" bg-gray-300">
    <img className="h-40 w-screen" src={AdminLogo} alt="" />
      <div className="h-screen w-full ml-72 mt-20 text-orange-500">
        <h1 className="text-4xl font-bold font-serif">Food Name: &nbsp;
        <input className="w-96 h-20 border-2 border-orange-500 " type="text" 
        />
        </h1>

        <h1 className="text-4xl font-bold font-serif">Price: &nbsp;
        <input className="w-96 h-20 border-2 border-orange-500 " type="text" 
        />
        </h1>

        <h1 className="text-4xl font-bold font-serif">Description: &nbsp;
        <textarea className="w-96 h-20 border-2 border-orange-500 " type="text" 
        />
        </h1>
      </div>
    </div>
    </>
  );
}