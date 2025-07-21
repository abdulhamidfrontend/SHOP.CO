import Navbar from "../../Components/Navbar/Navbar";
import Companies from "./Companies/Companies";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="w-full m-auto">
      <div className="navbar fixed m-auto top-0 left-0 right-0 z-50  shadow-xl">
        <div className="w-[90%] m-auto">
          <Navbar />
        </div>
      </div>
      <div className="hero w-full ">
        <div className="w-[90%] m-auto pt-40">
          <Hero />
        </div>
      </div>
      <div className="bg-black w-full">
        <div className="companies w-[90%] m-auto">
          <Companies />
        </div>
      </div>
    </div>
  );
};

export default Home;
