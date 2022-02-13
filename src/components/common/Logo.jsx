import React from "react";
import { logo } from "../../utils/images";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Logo({ styles, ...props }) {
  function scrollUp() {
    window.scrollTo(0, 0);
  }

  return (
    <Link onClick={scrollUp} to="/">
      <img
        {...props}
        className={`w-44 cursor-pointer drop-shadow tablet:w-48 laptop:w-56 desktop:w-72 ${styles}`}
        src={logo}
        alt="Pizzasaur logo"
      />
    </Link>
  );
}

Logo.defaultProps = {
  styles: "",
};

Logo.propTypes = {
  styles: PropTypes.string,
};

export default Logo;
