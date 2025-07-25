import Navbar from "../../Components/Navbar/Navbar";
import Browse from "./Browse/Browse";
import Comments from "./Comments/Comments";
import Companies from "./Companies/Companies";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import NewArrival from "./NewArrival/NewArrival";
import Offers from "./Offers/Offers";

import TopSelling from "./TopSelling/TopSelling";

const Home = () => {
  return (
    <div className="w-full m-auto">
      <div className="navbar fixed m-auto   top-0 left-0 right-0 z-50  shadow-xl">
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
      <div className="w-full">
        <div className="newarrivals border-b border-[#e1e1e1] w-[90%] m-auto py-18 ">
          <NewArrival />
        </div>
      </div>
      <div className="w-full">
        <div className="topselling  w-[90%] m-auto py-18 ">
          <TopSelling />
        </div>
      </div>
      <div className="w-full">
        <div className="browse w-[90%] m-auto pb-20">
          <Browse />
        </div>
      </div>
      <div className="w-full">
        <div className="comments w-[90%] m-auto">
          <Comments />
        </div>
      </div>
      <div className="w-full">
        <div className="offers py-20 w-[90%] m-auto">
          <Offers />
        </div>
      </div>
      <div className="w-full footer">
        <div className=" w-[90%] m-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
