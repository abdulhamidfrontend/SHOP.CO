import Logo from "../../../Components/Logo/Logo";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" py-20">
      <div className="top flex items-start justify-between max-[1052px]:gap-10 max-[1052px]:flex-col">
        <div className="left flex flex-col gap-6  max-[1052px]:max-w-fit  max-w-[250px]">
          <div className="logo">
            <Logo />
          </div>
          <p className="text-black font-normal text-[14px] leading-[157%] opacity-60">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="icons flex gap-3">
            <button className="rounded-full text-black bg-white p-2  border-[#cccccc] border hover:bg-black hover:text-white transition duration-300 cursor-pointer">
              <FaTwitter />
            </button>
            <button className="rounded-full text-black bg-white p-2  border-[#cccccc] border hover:bg-black hover:text-white transition duration-300 cursor-pointer">
              <FaFacebookF />
            </button>
            <button className="rounded-full text-black bg-white p-2  border-[#cccccc] border hover:bg-black hover:text-white transition duration-300 cursor-pointer">
              <FaInstagram />
            </button>
            <button className="rounded-full text-black bg-white p-2  border-[#cccccc] border hover:bg-black hover:text-white transition duration-300 cursor-pointer">
              <FaGithub />
            </button>
          </div>
        </div>
        <div className="right max-[780px]:grid-cols-3 max-[780px]:gap-8 max-[550px]:grid-cols-2 max-[1052px]:w-full grid grid-cols-4 max-[1320px]:gap-15  max-[1185px]:gap-10 max-[1120px]:gap-5 gap-25">
          <div className="company flex flex-col gap-6">
            <h1 className="font-medium text-[16px] leading-[112%]  tracking-[0.19em] uppercase ">
              Company
            </h1>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              About
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Features
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Works
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Career
            </p>
          </div>
          <div className="help flex flex-col gap-6">
            <h1 className="font-medium text-[16px] leading-[112%]  tracking-[0.19em] uppercase ">
              Help
            </h1>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Customer Support
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Delivery Details
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Terms & Conditions
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Privacy Policy
            </p>
          </div>
          <div className="faq flex flex-col gap-6">
            <h1 className="font-medium text-[16px] leading-[112%]  tracking-[0.19em] uppercase ">
              FAQ
            </h1>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Account
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Manage Deliveries
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Orders
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Payments
            </p>
          </div>
          <div className="resources flex flex-col gap-6">
            <h1 className="font-medium text-[16px] leading-[112%]  tracking-[0.19em] uppercase ">
              RESOURCES
            </h1>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Free eBooks
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              Development Tutorial
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              How to - Blog
            </p>
            <p className="font-normal text-[16px] leading-[119%] opacity-60 max-[450px]:text-[14px] max-[400px]:text-xs">
              YouTube Playlist
            </p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Footer;
