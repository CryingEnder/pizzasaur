import React from "react";
import { logo } from "../../utils/images";
import { Link } from "react-router-dom";

function Logo({ ...props }) {
  function scrollUp() {
    window.scrollTo(0, 0);
  }

  return (
    <Link onClick={scrollUp} to="/">
      <img
        {...props}
        className="w-40 tablet:w-44 laptop:w-56 desktop:w-64 cursor-pointer drop-shadow-lg"
        src={logo}
        alt="Pizzasaur logo"
      />
    </Link>
  );
}

export default Logo;
