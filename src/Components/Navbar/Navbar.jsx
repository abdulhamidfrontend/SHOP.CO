import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "../../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="flex  items-center justify-between py-6">
      <div className="left flex items-center gap-10 max-[450px]:gap-2 max-[1075px]:gap-4">
        <button onClick={toggleMenu} className="max-[1105px]:block hidden">
          <IoMenu size={24} />
        </button>
        <div className="logo">
          <Logo />
        </div>
        <div className="links max-[1105px]:hidden flex items-center gap-6">
          <div>
            <select name="" id="">
              <option value="shop">Shop</option>
            </select>
          </div>
          <a
            href="#onsale"
            onClick={() => setIsOpen(false)}
            className="text font-normal scroll-smooth text-[16px]"
          >
            On Sale
          </a>
          <a
            href="#new-arrivals"
            onClick={() => setIsOpen(false)}
            className="text font-normal scroll-smooth text-[16px]"
          >
            New Arrivals
          </a>
          <a
            href="#brands"
            onClick={() => setIsOpen(false)}
            className="text font-normal scroll-smooth text-[16px]"
          >
            Brands
          </a>
        </div>
      </div>
      <div className="right flex items-center gap-10 ">
        <div className="form">
          <form
            action=""
            className="w-[577px] max-[1075px]:w-[500px] max-[960px]:w-[400px] max-[845px]:w-[300px] max-[735px]:w-[250px] max-[680px]:hidden flex items-center max-[1415px]:w-[400px] max-[1216px]:w-[300px]  bg-[#f0f0f0]  py-3 px-4 rounded-[66px] gap-3"
          >
            <IoSearch size={24} className="text-gray-500" />
            <input
              type="search"
              className="hover:outline-none text-black w-full max-[705px]:text-xs "
              placeholder="Search for products..."
            />
          </form>
        </div>
        <div className="actions flex items-center max-[450px]:gap-2.5 gap-3.5">
          <button className="hidden max-[680px]:block cursor-pointer hover:scale-105 active:scale-100 transition duration-300        ">
            <IoSearch size={22} />
          </button>
          <button className="cursor-pointer hover:scale-105 active:scale-100 transition duration-300        ">
            <PiShoppingCartSimpleBold size={22} />
          </button>
          <button className="cursor-pointer hover:scale-105 active:scale-100 transition duration-300        ">
            <CgProfile size={22} />
          </button>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded text  hover:scale-105 cursor-pointer  active:scale-100          transition duration-300  "
          >
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 w-[90%]   menu    shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute  top-8 right-5 "
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose className="text-2xl " />
        </button>
        <div className="uppercase flex flex-col items-center gap-5 justify-center h-full">
          <div>
            <select name="" id="">
              <option value="shop">Shop</option>
            </select>
          </div>
          <a
            href="#onsale"
            onClick={() => setIsOpen(false)}
            className="text font-normal scroll-smooth text-[16px]"
          >
            On Sale
          </a>
          <a
            href="#new-arrivals"
            onClick={() => setIsOpen(false)}
            className="text font-normal scroll-smooth text-[16px]"
          >
            New Arrivals
          </a>
          <a
            href="#brands"
            onClick={() => setIsOpen(false)}
            className="text font-normal scroll-smooth text-[16px]"
          >
            Brands
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
