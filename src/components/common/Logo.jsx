import React from "react";
import { logo } from "../../utils/images";

function Logo({ ...props }) {
  return (
    <img
      {...props}
      className="w-40 tablet:w-44 laptop:w-56 desktop:w-64 cursor-pointer drop-shadow-lg"
      src={logo}
      alt="Pizzasaur logo"
    />
  );
}

export default Logo;
