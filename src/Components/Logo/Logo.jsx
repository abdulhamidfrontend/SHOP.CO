import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1 className="title font-bold text-[32px] max-[370px]:text-[20px] max-[650px]:text-[25px] hover:cursor-pointer">
          SHOP.CO
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
