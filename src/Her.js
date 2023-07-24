import { Link } from "react-router-dom";
import Hero from "./components/Hero";

const Her = () => {
  return (
    <div>
       <div className="flex  items-center bg-cyan-600 text-white py-4">
     <Link to="/">
      <button className="flex mr-40 ml-32 border-2 border-cyan-500 hover:bg-cyan-400 rounded-md px-2 py-0.5">{'Home'}</button>
     </Link>
        <h1 className="flex justify-center ml-52  font-bold text-2xl ">
          My Store
        </h1>
        <Link to="/basket" className=" flex absolute ml-96 border-2 border-cyan-500 hover:bg-cyan-400 rounded-md px-2 py-0.5">Basket</Link>

      </div>
      <Hero />
      <div>
        <h2 className=" flex justify-center items-center bg-cyan-700 text-white font-bold  py-1">
          Designed with ❤️ By Ahsan
        </h2>
      </div>
    </div>
  );
};

export default Her;
